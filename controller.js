
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
		// console.log(elem.initX!=elem.finalX && elem.initY!=elem.finalY);
		//&& elem.initX != 0 && elem.initY != 0 && elem.finalX != 0 && elem.finalY != 0
		// if(elem.initX!=elem.finalX && elem.initY!=elem.finalY){
		// 	console.log("passe au click")
			
		// }

		switch(this.currEditingMode){
			case editingMode.rect: {
				var rec = new Rectangle(this.currColour,this.currLineWidth,elem.initX, elem.initY, elem.finalX-elem.initX, elem.finalY-elem.initY);
				// var rec = drawing.get(this.currentShape);
				drawing.add(this.currentShape,rec);
				break;
			}
			case editingMode.line: {
				var line = new Line(this.currColour,this.currLineWidth,elem.initX, elem.initY, elem.initX, elem.initY );
				// var line = drawing.get(this.currentShape);
				drawing.add(this.currentShape,line);
				// console.log(drawing.listObject);
				break;
			}
		}

		// console.log(drawing.listObject);
		  
	}.bind(this);

	this.onInteractionUpdate= function(elem){
		// console.log(elem.initX!=elem.finalX && elem.initY!=elem.finalY && elem.initX != 0 && elem.initY != 0 && elem.finalX != 0 && elem.finalY != 0);
		// console.log(elem);
		var objUpdate = drawing.listObject.get(this.currentShape);
		if(elem.initX!=elem.finalX && elem.initY!=elem.finalY && elem.initX != 0 && elem.initY != 0 && elem.finalX != 0 && elem.finalY != 0){
			switch(this.currEditingMode){
				case editingMode.rect: {
					// var rec = new Rectangle(this.currColour,this.currLineWidth,elem.initX, elem.initY, elem.finalX-elem.initX, elem.finalY-elem.initY);
					// Rectangle: rec = drawing.get(this.currentShape);

					objUpdate.width=elem.finalX-elem.initX;
					objUpdate.height=elem.finalY-elem.initY;
					
					// console.log(objUpdate);

					drawing.update(this.currentShape,objUpdate);
					break;
				}
				case editingMode.line: {
					// var line = new Line(this.currColour,this.currLineWidth,elem.initX, elem.initY, elem.finalX, elem.finalY );
					// var line = drawing.listObject.get(this.currentShape);
					// console.log(drawing.listObject);
					// console.log(line);
					// console.log(elem.finalX);
					objUpdate.finalX=elem.finalX;
					objUpdate.finalY=elem.finalY;
					drawing.update(this.currentShape,objUpdate);
					break;
				}
			}
			// if(elem.initX != 0 && elem.initY != 0 && elem.finalX != 0 && elem.finalY != 0) {
			// 	drawing.paint(ctx);
			// }
			drawing.paint(ctx);
			  
		}

		
		


	}.bind(this);

	this.onInteractionEnd= function(elem){
		//console.log("ctx : " + ctx);
		
		
		var curentObj = drawing.listObject.get(this.currentShape);

		// console.log(curentObj.originX!=curentObj.finalX && curentObj.originY==curentObj.finalY);

		// if(curentObj.originX!=curentObj.finalX && curentObj.originY!=curentObj.finalY && curentObj.height>0 && curentObj.width>0){
		// 	drawing.updateShapeList(this.currentShape,this.currEditingMode,this);

		// 	this.currentShape++;
		// }
		// else{
		// 	drawing.remove(this.currentShape);
		// }
		

		// elem.initX =0;
		// elem.initY=0;
		// elem.finalX=0;
		// elem.finalY=0;

		

		switch(this.currEditingMode){
			case editingMode.rect: {

				if(curentObj.height!=0 && curentObj.width!=0){
					drawing.updateShapeList(this.currentShape,this.currEditingMode,this);

					
		
					this.currentShape++;
				}
				else{
					drawing.remove(this.currentShape);
				}

				elem.initX =0;
				elem.initY=0;
				elem.height=0;
				elem.width=0;	
				
				break;
			}
			case editingMode.line: {

				if(curentObj.originX!=curentObj.finalX && curentObj.originY!=curentObj.finalY){
					drawing.updateShapeList(this.currentShape,this.currEditingMode,this);

					
		
					this.currentShape++;
				}
				else{
					drawing.remove(this.currentShape);
				}

				elem.initX =0;
				elem.initY=0;
				elem.finalX=0;
				elem.finalY=0;
				
				break;
			}

			
		}

		

		drawing.paint(ctx);
		//console.log(this.currentShape);
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

	this.interactionDel = function(idElem){
		drawing.remove(idElem);
		drawing.paint(ctx);

		document.getElementById("shapeList").removeChild(document.getElementById(idElem));
	}.bind(this);
};


