
class Beat {
    constructor(file){
        this.file=new Audio(file);
        console.log(this.file);
        //this.file.play();
        
    }
    playAudio = () => {
        //let test=new Audio(file);
        this.file.currentTime = 0;
        this.file.play();
    }
}



/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode){
        this.color = color;
        this.keyCode = keyCode;
        this.elem = document.getElementById(keyCode);
        console.log(this.elem);
        this.setButtonColorInHTML();
        this.setTransitionEndListener();
    }

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        this.elem.style.borderColor = this.color;
    }

    setTransitionEndListener = () => {
        this.elem.addEventListener('transitionend', () => {
            this.deselect();

        });
    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
        this.elem.style.backgroundColor = this.color;
        this.elem.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.elem.style.backgroundColor = 'transparent';
        this.elem.style.boxShadow = 'none';
    }
}