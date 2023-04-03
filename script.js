let hat = document.querySelector("#hat"),
glasses = document.querySelector("#glasses"),
chains = document.querySelector("#chains"),
mask1 = document.querySelector("#mask"),
mask2 = document.querySelector("#mask2");
let customization = document.querySelector("customization");

hat.onmousedown = function(event){
    onDrag(event, hat);
}

glasses.onmousedown = function(event){
    onDrag(event, glasses);
}

chains.onmousedown = function(event){
    onDrag(event, chains);
}

mask1.onmousedown = function(event){
    onDrag(event, mask1);
}

mask2.onmousedown = function(event){
    onDrag(event, mask2);
}

function onDrag(event, el){
    let shiftX = event.clientX - el.getBoundingClientRect().left;
    let shiftY = event.clientY - el.getBoundingClientRect().top;

    el.style.position = 'absolute';
    el.style.zIndex = 1000;
    document.body.append(el);

    el.style.width = 200 + 'px';

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY){
        el.style.left = pageX - shiftX + 'px';
        el.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event){
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    el.onmouseup = function(){
        document.removeEventListener('mousemove', onMouseMove);
        el.onmouseup = null;
    }

    el.ondragstart = function(){
        return false;
    }
}