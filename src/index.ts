interface DCardContainer{
    container:HTMLElement;
    create(): number;

}

class DCardContainer{

    constructor() {
        this.container = document.createElement("dw-card-container");

    }

    create(){

        return 1;
    }
}


interface DCardItem{
    container:HTMLElement;
    create():HTMLElement;
    setBackgroundColor(color:String):void;
}


class DCardItem{

    constructor() {
        this.container = document.createElement("dw-card-item");
    }

    setBackgroundColor(color:any){
        this.container.style.background=color;
    }
    create(){

        return ;
    }

}