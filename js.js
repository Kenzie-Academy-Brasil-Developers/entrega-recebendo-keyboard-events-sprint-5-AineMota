
  let boxTop = 0;
  let boxLeft = 0;


document.addEventListener('keydown', (event) => {
    const keyName = event.key;
console.log(keyName)
    if(keyName === 'ArrowDown'){
        boxTop += 10;
    }
    if(keyName === 'ArrowUp'){
         boxTop -= 10;
    }
    if(keyName === 'ArrowLeft'){
         boxLeft -= 10;
    }
    if(keyName === 'ArrowRight'){
         boxLeft += 10;
    }
    document.getElementsByClassName("S").style.top = boxTop + "px";
    return document.getElementsByClassName("S").style.left = boxLeft + "px";
  });
