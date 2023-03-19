
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){
    this.listObject = new Map();

    this.add = function (id,shape){
        this.listObject.set(id,shape);
    }.bind(this);

    this.update= function(id,newShape){
        this.listObject.set(id,newShape);
    }.bind(this);

    this.remove= function(index){
        this.listObject.delete(index);
    }.bind(this)



}

function Shape(color,thinknes){
    this.color = color;
    this.thinknes = thinknes;

}

function Rectangle(color,thinknes,originX,originY,width,height){
    Shape.call(this,color,thinknes);

    this.originX = originX;
    this.originY = originY;

    this.width = width;
    this.height = height;

}

function Line(color,thinknes,originX,originY,finalX,finalY){
    Shape.call(this,color,thinknes);

    this.originX = originX;
    this.originY = originY;

    this.finalX = finalX;
    this.finalY = finalY;



}


