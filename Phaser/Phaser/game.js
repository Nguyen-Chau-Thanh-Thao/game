// Cấu hình trò chơi
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container', // Phần tử chứa game trong HTML
    physics: {
        default: 'arcade', // Bật module vật lý
        arcade: {
            gravity: { y: 0 }, // Không có trọng lực
            debug: false // Tắt chế độ debug
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let player;
let stars;
let cursors;

function preload() {
    // Tải các tài nguyên (hình ảnh)
    this.load.image('sky', 'https://labs.phaser.io/assets/skies/space3.png'); // Hình nền từ URL
    this.load.image('player', 'https://labs.phaser.io/assets/sprites/phaser-dude.png');
    this.load.image('star', 'https://labs.phaser.io/assets/sprites/star.png');
}

function create() {
    // Thêm nền game
    this.add.image(400, 300, 'sky');

    // Thêm nhân vật player
    player = this.physics.add.image(400, 500, 'player');
    player.setCollideWorldBounds(true);

    // Tạo nhóm sao
    stars = this.physics.add.group({
        key: 'star',
        repeat: 11, // Số lượng sao
        setXY: { x: 12, y: 0, stepX: 70 } // Vị trí ban đầu của các sao
    });

    // Xử lý va chạm giữa player và sao
    this.physics.add.overlap(player, stars, collectStar, null, this);

    // Cấu hình bàn phím điều khiển
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    // Điều khiển chuyển động của player theo các phím mũi tên
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
    } else {
        player.setVelocityX(0);
    }

    if (cursors.up.isDown) {
        player.setVelocityY(-160);
    } else if (cursors.down.isDown) {
        player.setVelocityY(160);
    } else {
        player.setVelocityY(0);
    }
}

function collectStar(player, star) {
    // Khi player thu thập sao, sao sẽ biến mất
    star.disableBody(true, true);
}

// Khởi tạo game
const game = new Phaser.Game(config);
