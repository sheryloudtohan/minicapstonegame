

let canvas = document.getElementById('game');
ctx = canvas.getContext("2d");
document.addEventListener("keydown", "keyPush");
setInterval(game, 1000/15);

// player position
px=py=10;

//grid size
gs=tc=20;

// apple
ax=ay=1;

trail=[];
tail=5;


// snake position
xv=yv=0;
function game(){
    px+=xv;
    py+=xv; // y velocity
    if(px<0){
        px= tc-1;
    }
    if(px>tc-1){
        px= 0;
    }
    if(py<0){
        px= tc-1;
    }
    if(py>tc-1){
        py= 0;
    }
    ctx.fillStyle="black"; // context
    ctx.fillRect(0,0,canv.width,canv.height);

    ctx.fillStyle="lightgreen"; // context
    for(let i=0;i<trail.length;i++){
        ctx.fillRect(trail[i].x*gs, trail[i].y*gs, gs-2, gs-2);
        if(trail[i].x==px && trail[i].y==py){
            tail=5;
        }
    }

    trail.push({x:px, y:py});
    while(trail.length>tail){
        trail.shift();
    }

    if(ax==px && ay==py){
        tail++;
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
    }

    ctx.fillStyle="red"; // context
    ctx.fillRect(ax*gs, ay*gs, gs-2, gs-2);
}


function keyPush(evt){
    switch(evt.keycode()){
        case 37;
            xv=1;yv=0;
            break;
        case 38;
            xv=0;yv=1;
            break;
        case 39;
            xv=1;yv=0;
            break;
        case 40;
            xv=0;yv=1;
            break;
    }
}


