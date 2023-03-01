
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
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.listObject.forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
  };

  Shape.prototype.paint = function(elem,ctx){
    ctx.strokeStyle = elem.color;
    ctx.lineWidth   = elem.thinknes;
  };
  