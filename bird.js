





// const canvas = document.getElementById('gameCanvas');
// const ctx = canvas.getContext('2d');

// let bird, pipes, frameCount, score, isGameOver, gameStarted;
// const pipeWidth = 50;
// const pipeGap = 100;
// const pipeSpeed = 2;
// const pipeFrequency = 90;

// function init() {
//     bird = {
//         x: 50,
//         y: canvas.height / 2,
//         width: 34,
//         height: 24,
//         gravity: 0.6,
//         lift: -12,
//         velocity: 0,
//         image: new Image()
//     };
//     bird.image.src = 'Bird.png';

//     pipes = [];
//     frameCount = 0;
//     score = 0;
//     isGameOver = false;
//     gameStarted = false;

//     ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas
//     drawBird();
//     drawScore(); // Draw the score initially

//     document.getElementById('startButton').style.display = 'block';
//     document.getElementById('restartButton').style.display = 'none';
// }

// function drawBird() {
//     ctx.drawImage(bird.image, bird.x, bird.y, bird.width, bird.height);
// }

// function drawPipes() {
//     pipes.forEach(pipe => {
//         ctx.fillStyle = '#008000'; 
//         ctx.fillRect(pipe.x, 0, pipeWidth, pipe.topHeight);
//         ctx.fillRect(pipe.x, canvas.height - pipe.bottomHeight, pipeWidth, pipe.bottomHeight);
//     });
// }

// function updatePipes() {
//     if (frameCount % pipeFrequency === 0) {
//         const topHeight = Math.random() * (canvas.height - pipeGap - 50) + 50;
//         const bottomHeight = canvas.height - topHeight - pipeGap;
//         pipes.push({
//             x: canvas.width,
//             topHeight: topHeight,
//             bottomHeight: bottomHeight
//         });
//     }
    
//     pipes.forEach(pipe => {
//         pipe.x -= pipeSpeed;
//     });

//     if (pipes.length > 0 && pipes[0].x < -pipeWidth) {
//         pipes.shift();
//         score++;
//     }
// }

// function collisionDetection() {
//     pipes.forEach(pipe => {
//         if (bird.x + bird.width > pipe.x &&
//             bird.x < pipe.x + pipeWidth &&
//             (bird.y < pipe.topHeight || bird.y + bird.height > canvas.height - pipe.bottomHeight)) {
//             isGameOver = true;
//         }
//     });

//     if (bird.y + bird.height > canvas.height || bird.y < 0) {
//         isGameOver = true;
//     }
// }

// function drawScore() {
//     ctx.fillStyle = '#000';
//     ctx.font = '20px Arial';
//     ctx.clearRect(0, 0, canvas.width, 50); // Clear the area where the score is displayed
//     ctx.fillText(`Score: ${score}`, 10, 30); // Ensure score text is drawn in the same position every time
// }

// function drawGameOver() {
//     ctx.fillStyle = '#FF0000';
//     ctx.font = '40px Arial';
//     ctx.textAlign = 'center';
//     ctx.fillText('Game Over😢', canvas.width / 2, canvas.height / 2);
// }

// function update() {
//     if (isGameOver) {
//         drawGameOver();
//         document.getElementById('restartButton').style.display = 'block';
//         return;
//     }

//     if (!gameStarted) return;

//     bird.velocity += bird.gravity;
//     bird.velocity *= 0.8;  // Damping effect to control the fall speed
//     bird.y += bird.velocity;
//     frameCount++;
    
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBird();
//     drawPipes();
//     updatePipes();
//     collisionDetection();
//     drawScore(); // Always update the score

//     requestAnimationFrame(update);
// }

// document.getElementById('startButton').addEventListener('click', function() {
//     if (!gameStarted) {
//         gameStarted = true;
//         document.getElementById('startButton').style.display = 'none';
//         document.getElementById('restartButton').style.display = 'none';
//         update();
//     }
// });

// document.getElementById('restartButton').addEventListener('click', function() {
//     init(); 
//     gameStarted = true;
//     update();
// });

// document.addEventListener('keydown', function(e) {
//     if (e.code === 'Space') {
//         bird.velocity = bird.lift;
//     }
// });

// init(); 





// const canvas = document.getElementById('gameCanvas');
// const ctx = canvas.getContext('2d');

// // Get the background music element
// const backgroundMusic = document.getElementById('backgroundMusic');

// let bird, pipes, frameCount, score, isGameOver, gameStarted;
// const pipeWidth = 50;
// const pipeGap = 100;
// const pipeSpeed = 2;
// const pipeFrequency = 90;

// function init() {
//     bird = {
//         x: 50,
//         y: canvas.height / 2,
//         width: 34,
//         height: 24,
//         gravity: 0.6,
//         lift: -12,
//         velocity: 0,
//         image: new Image()
//     };
//     bird.image.src = 'Bird.png';

//     pipes = [];
//     frameCount = 0;
//     score = 0;
//     isGameOver = false;
//     gameStarted = false;

//     ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas
//     drawBird();
//     drawScore(); // Draw the score initially

//     document.getElementById('startButton').style.display = 'block';
//     document.getElementById('restartButton').style.display = 'none';
// }

// function drawBird() {
//     ctx.drawImage(bird.image, bird.x, bird.y, bird.width, bird.height);
// }

// function drawPipes() {
//     pipes.forEach(pipe => {
//         ctx.fillStyle = '#008000'; 
//         ctx.fillRect(pipe.x, 0, pipeWidth, pipe.topHeight);
//         ctx.fillRect(pipe.x, canvas.height - pipe.bottomHeight, pipeWidth, pipe.bottomHeight);
//     });
// }

// function updatePipes() {
//     if (frameCount % pipeFrequency === 0) {
//         const topHeight = Math.random() * (canvas.height - pipeGap - 50) + 50;
//         const bottomHeight = canvas.height - topHeight - pipeGap;
//         pipes.push({
//             x: canvas.width,
//             topHeight: topHeight,
//             bottomHeight: bottomHeight
//         });
//     }
    
//     pipes.forEach(pipe => {
//         pipe.x -= pipeSpeed;
//     });

//     if (pipes.length > 0 && pipes[0].x < -pipeWidth) {
//         pipes.shift();
//         score++;
//     }
// }

// function collisionDetection() {
//     pipes.forEach(pipe => {
//         if (bird.x + bird.width > pipe.x &&
//             bird.x < pipe.x + pipeWidth &&
//             (bird.y < pipe.topHeight || bird.y + bird.height > canvas.height - pipe.bottomHeight)) {
//             isGameOver = true;
//             backgroundMusic.pause(); // Stop the music if the game is over
//         }
//     });

//     if (bird.y + bird.height > canvas.height || bird.y < 0) {
//         isGameOver = true;
//         backgroundMusic.pause(); // Stop the music if the bird hits the ground or goes out of bounds
//     }
// }

// function drawScore() {
//     ctx.fillStyle = '#000';
//     ctx.font = '20px Arial';
//     ctx.clearRect(0, 0, canvas.width, 50); // Clear the area where the score is displayed
//     ctx.fillText(`Score: ${score}`, 10, 30); // Ensure score text is drawn in the same position every time
// }

// function drawGameOver() {
//     ctx.fillStyle = '#FF0000';
//     ctx.font = '40px Arial';
//     ctx.textAlign = 'center';
//     ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);
// }

// function update() {
//     if (isGameOver) {
//         drawGameOver();
//         document.getElementById('restartButton').style.display = 'block';
//         return;
//     }

//     if (!gameStarted) return;

//     bird.velocity += bird.gravity;
//     bird.velocity *= 0.8;  // Damping effect to control the fall speed
//     bird.y += bird.velocity;
//     frameCount++;
    
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBird();
//     drawPipes();
//     updatePipes();
//     collisionDetection();
//     drawScore(); // Always update the score

//     requestAnimationFrame(update);
// }

// document.getElementById('startButton').addEventListener('click', function() {
//     if (!gameStarted) {
//         gameStarted = true;
//         document.getElementById('startButton').style.display = 'none';
//         document.getElementById('restartButton').style.display = 'none';
//         backgroundMusic.play();  // Play the background music when the game starts
//         update();
//     }
// });

// document.getElementById('restartButton').addEventListener('click', function() {
//     init(); 
//     gameStarted = true;
//     backgroundMusic.currentTime = 0; // Reset music to the beginning
//     backgroundMusic.play();  // Restart the background music
//     update();
// });

// document.addEventListener('keydown', function(e) {
//     if (e.code === 'Space') {
//         bird.velocity = bird.lift;
//     }
// });

// init();








const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Get the audio elements
const backgroundMusic = document.getElementById('backgroundMusic');
const gameOverSound = document.getElementById('gameOverSound');

let bird, pipes, frameCount, score, isGameOver, gameStarted;
const pipeWidth = 50;
const pipeGap = 100;
const pipeSpeed = 2;
const pipeFrequency = 90;

function init() {
    bird = {
        x: 50,
        y: canvas.height / 2,
        width: 34,
        height: 24,
        gravity: 0.6,
        lift: -12,
        velocity: 0,
        image: new Image()
    };
    bird.image.src = 'Bird.png';

    pipes = [];
    frameCount = 0;
    score = 0;
    isGameOver = false;
    gameStarted = false;

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas
    drawBird();
    drawScore(); // Draw the score initially

    document.getElementById('startButton').style.display = 'block';
    document.getElementById('restartButton').style.display = 'none';

    // Stop any playing sounds if reinitializing
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    gameOverSound.pause();
    gameOverSound.currentTime = 0;
}

function drawBird() {
    ctx.drawImage(bird.image, bird.x, bird.y, bird.width, bird.height);
}

function drawPipes() {
    pipes.forEach(pipe => {
        ctx.fillStyle = '#008000'; 
        ctx.fillRect(pipe.x, 0, pipeWidth, pipe.topHeight);
        ctx.fillRect(pipe.x, canvas.height - pipe.bottomHeight, pipeWidth, pipe.bottomHeight);
    });
}

function updatePipes() {
    if (frameCount % pipeFrequency === 0) {
        const topHeight = Math.random() * (canvas.height - pipeGap - 50) + 50;
        const bottomHeight = canvas.height - topHeight - pipeGap;
        pipes.push({
            x: canvas.width,
            topHeight: topHeight,
            bottomHeight: bottomHeight
        });
    }
    
    pipes.forEach(pipe => {
        pipe.x -= pipeSpeed;
    });

    if (pipes.length > 0 && pipes[0].x < -pipeWidth) {
        pipes.shift();
        score++;
    }
}

function collisionDetection() {
    pipes.forEach(pipe => {
        if (bird.x + bird.width > pipe.x &&
            bird.x < pipe.x + pipeWidth &&
            (bird.y < pipe.topHeight || bird.y + bird.height > canvas.height - pipe.bottomHeight)) {
            isGameOver = true;
        }
    });

    if (bird.y + bird.height > canvas.height || bird.y < 0) {
        isGameOver = true;
    }
}

function drawScore() {
    ctx.fillStyle = '#000';
    ctx.font = '20px Arial';
    ctx.clearRect(0, 0, canvas.width, 50); // Clear the area where the score is displayed
    ctx.fillText(`Score: ${score}`, 10, 30); // Ensure score text is drawn in the same position every time
}

function drawGameOver() {
    ctx.fillStyle = '#FF0000';
    ctx.font = '40px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over😢', canvas.width / 2, canvas.height / 2);
    
    // Play the game over sound
    backgroundMusic.pause(); // Stop background music
    gameOverSound.play();     // Play game over sound
}

function update() {
    if (isGameOver) {
        drawGameOver();
        document.getElementById('restartButton').style.display = 'block';
        return;
    }

    if (!gameStarted) return;

    bird.velocity += bird.gravity;
    bird.velocity *= 0.8;  // Damping effect to control the fall speed
    bird.y += bird.velocity;
    frameCount++;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBird();
    drawPipes();
    updatePipes();
    collisionDetection();
    drawScore(); // Always update the score

    requestAnimationFrame(update);
}

document.getElementById('startButton').addEventListener('click', function() {
    if (!gameStarted) {
        gameStarted = true;
        document.getElementById('startButton').style.display = 'none';
        document.getElementById('restartButton').style.display = 'none';
        backgroundMusic.play(); // Start the background music
        update();
    }
});

document.getElementById('restartButton').addEventListener('click', function() {
    init(); 
    gameStarted = true;
    backgroundMusic.play(); // Restart background music on game restart
    update();
});

document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        bird.velocity = bird.lift;
    }
});

init();
