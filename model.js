
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(listObject){
    this.listObject = [];

    this.add = function (shape){
        this.listObject.push(shape);
    }.bind(this)

}

function Shape(color,thinknes){
    this.color = color;
    this.thinknes = thinknes;

}

function Rectangle(color, thinknes,originX,originY,width,height){
    Shape.call(this, color,thinknes);

    this.originX = originX;
    this.originY = originY;

    this.width = width;
    this.height = height;

}

function Line(color,thinknes,originX,originY,finalX,finalY){
    Shape.call(this, color,thinknes);

    this.originX = originX;
    this.originY = originY;

    this.finalX = finalX;
    this.finalY = finalY;



}


// mise en place des sous_class
// Rectangle.prototype= new Shape();
// Line.prototype=new Shape();

