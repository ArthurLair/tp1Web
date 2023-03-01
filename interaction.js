
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.initX = 0;
  this.initY = 0;
  this.finalX = 0;
  this.finalY = 0;

	// Developper les 3 fonctions gérant les événements
  this.pression = function (evt){

    var mousePos = getMousePosition(canvas,evt);

    this.initX = mousePos["x"];
    this.initY = mousePos["y"];

    interactor.onInteractionStart(this);
  }.bind(this);

  this.deplacement = function (evt){
    var mousePos = getMousePosition(canvas,evt);

    this.finalX = mousePos["x"];
    this.finalY = mousePos["y"];
    interactor.onInteractionUpdate(this);
  }.bind(this);

  this.relachement = function (evt){
    var mousePos = getMousePosition(canvas,evt);

    this.finalX = mousePos["x"];
    this.finalY = mousePos["y"];
    interactor.onInteractionEnd(this);
  }.bind(this);
	// Associer les fonctions précédentes aux évènements du canvas.

  canvas.addEventListener('mousedown', this.pression, false);
  canvas.addEventListener('mousemove', this.deplacement, false);
  canvas.addEventListener('mouseup', this.relachement, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



