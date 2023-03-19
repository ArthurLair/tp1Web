
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    // console.log(this.originX)
    //TODO Manager color
    Shape.prototype.paint(this,ctx);

    ctx.beginPath();
    ctx.rect(this.originX, this.originY, this.width, this.height);
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
    //TODO Manager color
    Shape.prototype.paint(this,ctx);

    ctx.beginPath();
    ctx.moveTo(this.originX, this.originY);
    ctx.lineTo(this.finalX, this.finalY);
    ctx.stroke();
  };
  
  Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (eltDuTableau of this.listObject.values()) {
      // console.log(eltDuTableau);
      eltDuTableau.paint(ctx);
    }
    
  };

  Shape.prototype.paint = function(elem,ctx){
    ctx.strokeStyle = elem.color;
    ctx.lineWidth   = elem.thinknes;
  };

  Drawing.prototype.updateShapeList = function(id,currEditingMode,iterator) {
    // console.log(this.listObject);
    var idNewElem = id;

    // var newElemCreate = this.listObject[idNewElem];

    var formeUse = ""

    switch(currEditingMode){
      case editingMode.rect: {
        formeUse = "Rectangle"
        break;
      }
      case editingMode.line: {
        formeUse = "Line"
        break;
      }
    }

    var newLi = document.createElement("li");
    newLi.id=idNewElem;

    var newButton = document.createElement("button");
    newButton.className = "btn btn-default";

    newButton.addEventListener("click",function() {
      iterator.interactionDel(idNewElem);
    }, false);

    var newSpanInButton = document.createElement("span");
    newSpanInButton.textContent = "Suprimer";
    newSpanInButton.className="lyphicon glyphicon-remove-sign";


    newButton.appendChild(newSpanInButton);
    newLi.appendChild(newButton);
    newLi.appendChild(document.createTextNode(" "+idNewElem.toString()+ " : "+formeUse));
    document.getElementById("shapeList").appendChild(newLi);
  }
  