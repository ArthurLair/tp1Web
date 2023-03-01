
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = function(elem){
		

		switch(this.currEditingMode){
			case editingMode.rect: {
				var rec = new Rectangle(this.currColour,this.currLineWidth,elem.initX, elem.initY, elem.finalX, elem.finalY);
				drawing.add(rec);
			  	break;
			}
			case editingMode.line: {
				var line = new Line(this.currColour,this.currLineWidth,elem.initX, elem.initY, elem.finalX, elem.finalY );
				drawing.add(line);
				break;
			}
		  }
		  
	}.bind(this);

	this.onInteractionUpdate= function(elem){
		//console.log(elem);
		if(elem.initX!=elem.finalX && elem.initY!=elem.finalY){
			switch(this.currEditingMode){
				case editingMode.rect: {
					var rec = new Rectangle(this.currColour,this.currLineWidth,elem.initX, elem.initY, elem.finalX, elem.finalY);
					drawing.update(this.currentShape,rec);
					  break;
				}
				case editingMode.line: {
					var line = new Line(this.currColour,this.currLineWidth,elem.initX, elem.initY, elem.finalX, elem.finalY );
					drawing.update(this.currentShape,line);
					break;
				}
			}
			if(elem.initX != 0 && elem.initY != 0 && elem.finalX != 0 && elem.finalY != 0) {
				drawing.paint(ctx);
			}
			  
		}
		


	}.bind(this);

	this.onInteractionEnd= function(elem){
		console.log("ctx : " + ctx);

		drawing.paint(ctx);

		elem.initX =0;
		elem.initY=0;
		elem.finalX=0;
		elem.finalY=0;


		this.currentShape++;
		console.log(this.currentShape);
	}.bind(this);

	this.clickRect = function() {
		this.currEditingMode = editingMode.rect;
	}

	this.clickLine = function() {
		this.currEditingMode = editingMode.line;
	}

	this.changeColor = function(color) {
		this.currColour = color;
	}

	this.changeWidth = function(width) {
		this.currLineWidth = width;
	}
};


