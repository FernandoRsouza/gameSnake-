// fazendo a leitura do DOM
var canvas = document.getElementById('snake')
var context = canvas.getContext('2d')
var box =  32
var snake = []
// definindo o tamanho da snake 
snake[0] = {
x : 8 * box,
y : 8 * box
}
// iniciando variavel para direção 
var direction ='right'
// criando comida em posição aleatoria
var food = {
    x: Math.floor(Math.random() * 15 + 1 ) *box,
    y: Math.floor(Math.random() * 15 +1) *box
}
console.log(food.x ,food.y)
// criando Bg do campo 
function criarBG(){
    context.fillStyle = 'lightgreen'
    context.fillRect( 0, 0, 16 * box, 16 * box)
}
// criando a snake
function createSnake() {
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = "green"
        context.fillRect(snake[i].x, snake[i].y, box, box)

    }
}
    // criando controle da snake
    function update(event) {
        if (event.keycode == 37 && direction != 'right') direction='left'
        if (event.keycode == 38 && direction != 'down') direction='up'
        if (event.keycode == 39 && direction != 'left') direction='right'
        if (event.keycode == 40 && direction != 'up') direction='down'
         
}
 document.addEventListener('keydown', update)


// criando a comida da snake
function drawFood(){
        context.fillStyle = 'red'
    context.fillRect(food.x, food.y, box, box)
    
}
//  criando a atualização do jogo
function iniciarJogo() {
    if(snake[0].x > 15 * box && direction == 'right') snake[0].x =0
    if(snake[0].x < 0  && direction == 'left') snake[0].x =16 * box
    if(snake[0].y > 15 * box && direction == 'down') snake[0].y =0
    if (snake[0].x > 0 && direction == 'up') snake[0].y = 16 * box
    
   
    
    for (let i = 0; i < snake.length; i++){
        if (snake[0].x == snake[i].y && snake[0].y == snake[i].y) {
            clearInterval(" ")
            alert("Game over!! :(")
        }
    }
// criando ponto de partida do snake
    let snakex = snake[0].x
    let snakey = snake[0].y
    
    if(direction == 'right')snakex +=box
    if(direction == 'left')snakex -=box
    if(direction == 'up')snakey -=box
    if (direction == 'down') snakey +=box
    
    if (snakex != food.x || snakey != food.y) {
         snake.pop()
    } else {
         Math.floor(Math.random() * 15 + 1 ) *box,
         Math.floor(Math.random() * 15 +1) *box
   }
    
// criando a cabeça da snake
    let newhead = {
        x: snakex,
        y: snakey
    }
    snake.unshift(newhead)
   criarBG()
    createSnake()
    drawFood() 
}


    
let jogo = setInterval(iniciarJogo(),100)