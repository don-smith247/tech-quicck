let max_particles = 250;
let particles = [];
let frequency = 10;
let init_num = max_particles;
let max_time = frequency * max_particles;
let time_to_recreate = false;

setTimeout(function () {
    time_to_recreate = true;
}, max_time);

popolate(max_particles);

var heroSection = document.getElementById('hero');
var tela = document.createElement('canvas');
tela.width = heroSection.offsetWidth;
tela.height = heroSection.offsetHeight;
tela.style.position = 'absolute';
tela.style.top = '0';
tela.style.left = '0';
tela.style.zIndex = '-1';
heroSection.appendChild(tela);

var canvas = tela.getContext('2d');

class Particle {
    constructor(canvas) {
        let random = Math.random();
        this.progress = 0;
        this.canvas = canvas;
        this.center = {
            x: heroSection.offsetWidth / 2,
            y: heroSection.offsetHeight / 2
        };

        this.point_of_attraction = {
            x: heroSection.offsetWidth / 2,
            y: heroSection.offsetHeight / 2
        };

        if (Math.random() > 0.5) {
            this.x = heroSection.offsetWidth * Math.random();
            this.y = Math.random() > 0.5 ? -Math.random() - 100 : heroSection.offsetHeight + Math.random() + 100;
        } else {
            this.x = Math.random() > 0.5 ? -Math.random() - 100 : heroSection.offsetWidth + Math.random() + 100;
            this.y = heroSection.offsetHeight * Math.random();
        }

        this.s = Math.random() * 2;
        this.a = 0;
        this.radius = random > .2 ? Math.random() * 1 : Math.random() * 3;
        this.color = random > .2 ? "#694FB9" : "#9B0127";
        this.radius = random > .8 ? Math.random() * 2.2 : this.radius;
        this.color = random > .8 ? "#3CFBFF" : this.color;
    }

    calculateDistance(v1, v2) {
        let x = Math.abs(v1.x - v2.x);
        let y = Math.abs(v1.y - v2.y);
        return Math.sqrt(x * x + y * y);
    }

    render() {
        this.canvas.beginPath();
        this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.canvas.fillStyle = this.color;
        this.canvas.fill();
        this.canvas.closePath();
    }

    move() {
        let p1 = { x: this.x, y: this.y };
        let distance = this.calculateDistance(p1, this.point_of_attraction);
        let force = Math.max(100, 1 + distance);

        let attr_x = (this.point_of_attraction.x - this.x) / force;
        let attr_y = (this.point_of_attraction.y - this.y) / force;

        this.x += Math.cos(this.a) * this.s + attr_x;
        this.y += Math.sin(this.a) * this.s + attr_y;
        this.a += Math.random() > 0.5 ? Math.random() * 0.9 - 0.45 : Math.random() * 0.4 - 0.2;

        if (distance < 30 + Math.random() * 100) {
            return false;
        }

        this.render();
        this.progress++;
        return true;
    }
}

function popolate(num) {
    for (var i = 0; i < num; i++) {
        setTimeout(
            function (x) {
                return function () {
                    particles.push(new Particle(canvas));
                };
            }(i),
            frequency * i
        );
    }
    return particles.length;
}

function clear() {
    canvas.globalAlpha = 0.08;
    canvas.fillStyle = '#110031';
    canvas.fillRect(0, 0, tela.width, tela.height);
    canvas.globalAlpha = 1;
}

function update() {
    particles = particles.filter(function (p) { return p.move(); });
    if (time_to_recreate && particles.length < init_num) {
        popolate(1);
    }
    clear();
    requestAnimationFrame(update.bind(this));
}

update();

