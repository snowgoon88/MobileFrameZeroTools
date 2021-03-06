function FrameModel(company) {
	var self = this;
	
	self.company = company;

	self.id = ko.observable(0);
	self.name = ko.observable('');
	
	self.nbWild = ko.observable(2);
	self.removeWild = function() {
		if (parseFloat(self.nbWild()) > 0) {
			self.nbWild(self.nbWild() - 1);
			
			self.isFrameStillActive();
		} // if
    }
	self.wildValue1 = ko.observable(0);
	self.wildValue2 = ko.observable(0);
	self.rollWild = function() {
		self.wildValue1(0);
		self.wildValue2(0);
		
		if (parseFloat(self.nbWild()) > 0) {
			self.wildValue1(Math.floor(Math.random() * 6) + 1);
		} // if
		
		if (parseFloat(self.nbWild()) > 1) {
			self.wildValue2(Math.floor(Math.random() * 6) + 1);
		} // if
    }
	
	self.wildValue1Css = ko.computed(function() {
        return 'whited' + parseFloat(self.wildValue1());
    }, self);
	
	self.wildValue2Css = ko.computed(function() {
        return 'whited' + parseFloat(self.wildValue2());
    }, self);
	
	self.nbDefensive = ko.observable(0);
	self.removeDefensive = function() {
		if (parseFloat(self.nbDefensive()) > 0) {
			self.nbDefensive(self.nbDefensive() - 1);
			
			self.isFrameStillActive();
		} // if
    }
	self.defensiveValue1 = ko.observable(0);
	self.defensiveValue2 = ko.observable(0);
	self.rollDefensive = function() {
		self.defensiveValue1(0);
		self.defensiveValue2(0);
		
		if (parseFloat(self.nbDefensive()) > 0) {
			self.defensiveValue1(Math.floor(Math.random() * 6) + 1);
		} // if
		
		if (parseFloat(self.nbDefensive()) > 1) {
			self.defensiveValue2(Math.floor(Math.random() * 6) + 1);
		} // if
    }
	
	self.defensiveValue1Css = ko.computed(function() {
        return 'blued' + parseFloat(self.defensiveValue1());
    }, self);
	
	self.defensiveValue2Css = ko.computed(function() {
        return 'blued' + parseFloat(self.defensiveValue2());
    }, self);
	
	self.nbMovement = ko.observable(0);
	self.removeMovement = function() {
		if (parseFloat(self.nbMovement()) > 0) {
			self.nbMovement(self.nbMovement() - 1);
			
			self.isFrameStillActive();
		} // if
    }
	self.movementValue1 = ko.observable(0);
	self.movementValue2 = ko.observable(0);
	self.movementValue3 = ko.observable(0);
	self.rollMovement = function() {
		self.movementValue1(0);
		self.movementValue2(0);
		self.movementValue3(0);
		
		if (parseFloat(self.nbMovement()) > 0) {
			self.movementValue1(Math.floor(Math.random() * 6) + 1);
		} // if
		
		if (parseFloat(self.nbMovement()) > 1) {
			self.movementValue2(Math.floor(Math.random() * 6) + 1);
		} // if
		
		if ((parseFloat(self.nbDirectFire()) === 0) && (parseFloat(self.nbArtilleryRange()) === 0)) {
			self.movementValue3(Math.floor(Math.random() * 8) + 1);
		} // if
    }
	
	self.isMovementVisible = function() {
		if (parseFloat(self.nbMovement()) > 0) {
			return true;
		}
		else {
			if ((parseFloat(self.nbDirectFire()) === 0) && (parseFloat(self.nbArtilleryRange()) === 0)) {
				return true;
			}
			else {
				return false;
			} // if
		} // if
    }
	
	self.movementValue1Css = ko.computed(function() {
        return 'greend' + parseFloat(self.movementValue1());
    }, self);
	
	self.movementValue2Css = ko.computed(function() {
        return 'greend' + parseFloat(self.movementValue2());
    }, self);
	
	self.movementValue3Css = ko.computed(function() {
        return 'greend' + parseFloat(self.movementValue3());
    }, self);
	
	self.nbSurveillanceCommunication = ko.observable(0);
	self.removeSurveillanceCommunication = function() {
		if (parseFloat(self.nbSurveillanceCommunication()) > 0) {
			self.nbSurveillanceCommunication(self.nbSurveillanceCommunication() - 1);
			
			self.isFrameStillActive();
		} // if
    }
	self.surveillanceCommunicationValue1 = ko.observable(0);
	self.surveillanceCommunicationValue2 = ko.observable(0);
	self.rollSurveillanceCommunication = function() {
		self.surveillanceCommunicationValue1(0);
		self.surveillanceCommunicationValue2(0);
		
		if (parseFloat(self.nbSurveillanceCommunication()) > 0) {
			self.surveillanceCommunicationValue1(Math.floor(Math.random() * 6) + 1);
		} // if
		
		if (parseFloat(self.nbSurveillanceCommunication()) > 1) {
			self.surveillanceCommunicationValue2(Math.floor(Math.random() * 6) + 1);
		} // if
    }
	
	self.surveillanceCommunicationValue1Css = ko.computed(function() {
        return 'yellowd' + parseFloat(self.surveillanceCommunicationValue1());
    }, self);
	
	self.surveillanceCommunicationValue2Css = ko.computed(function() {
        return 'yellowd' + parseFloat(self.surveillanceCommunicationValue2());
    }, self);
	
	self.nbHandToHand = ko.observable(0);
	self.removeHandToHand = function() {
		if (parseFloat(self.nbHandToHand()) > 0) {
			self.nbHandToHand(self.nbHandToHand() - 1);
			
			self.isFrameStillActive();
		} // if
    }
	self.handToHandValue1 = ko.observable(0);
	self.handToHandValue2 = ko.observable(0);
	self.handToHandValue3 = ko.observable(0);
	self.rollHandToHand = function() {
		self.handToHandValue1(0);
		self.handToHandValue2(0);
		self.handToHandValue3(0);
		
		if (parseFloat(self.nbHandToHand()) > 0) {
			self.handToHandValue1(Math.floor(Math.random() * 6) + 1);
			self.handToHandValue2(Math.floor(Math.random() * 6) + 1);
		} // if
		
		if (parseFloat(self.nbHandToHand()) > 1) {
			self.handToHandValue3(Math.floor(Math.random() * 8) + 1);
		} // if
    }
	
	self.handToHandValue1Css = ko.computed(function() {
        return 'redd' + parseFloat(self.handToHandValue1());
    }, self);
	
	self.handToHandValue2Css = ko.computed(function() {
        return 'redd' + parseFloat(self.handToHandValue2());
    }, self);
	
	self.handToHandValue3Css = ko.computed(function() {
        return 'redd' + parseFloat(self.handToHandValue3());
    }, self);
	
	self.nbDirectFire = ko.observable(0);
	self.removeDirectFire = function() {
		if (parseFloat(self.nbDirectFire()) > 0) {
			self.nbDirectFire(self.nbDirectFire() - 1);
			
			self.isFrameStillActive();
		} // if
    }
	self.directFireValue1 = ko.observable(0);
	self.directFireValue2 = ko.observable(0);
	self.directFireValue3 = ko.observable(0);
	self.rollDirectFire = function() {
		self.directFireValue1(0);
		self.directFireValue2(0);
		self.directFireValue3(0);
		
		if (parseFloat(self.nbDirectFire()) > 0) {
			self.directFireValue1(Math.floor(Math.random() * 6) + 1);
			self.directFireValue2(Math.floor(Math.random() * 6) + 1);
		} // if
		
		if (parseFloat(self.nbDirectFire()) > 1) {
			self.directFireValue3(Math.floor(Math.random() * 8) + 1);
		} // if
    }
	
	self.directFireValue1Css = ko.computed(function() {
        return 'redd' + parseFloat(self.directFireValue1());
    }, self);
	
	self.directFireValue2Css = ko.computed(function() {
        return 'redd' + parseFloat(self.directFireValue2());
    }, self);
	
	self.directFireValue3Css = ko.computed(function() {
        return 'redd' + parseFloat(self.directFireValue3());
    }, self);
	
	self.nbArtilleryRange = ko.observable(0);
	self.removeArtilleryRange = function() {
		if (parseFloat(self.nbArtilleryRange()) > 0) {
			self.nbArtilleryRange(self.nbArtilleryRange() - 1);
			
			self.isFrameStillActive();
		} // if
    }
	self.artilleryRangeValue1 = ko.observable(0);
	self.artilleryRangeValue2 = ko.observable(0);
	self.artilleryRangeValue3 = ko.observable(0);
	self.rollArtilleryRange = function() {
		self.artilleryRangeValue1(0);
		self.artilleryRangeValue2(0);
		self.artilleryRangeValue3(0);
		
		if (parseFloat(self.nbArtilleryRange()) > 0) {
			self.artilleryRangeValue1(Math.floor(Math.random() * 6) + 1);
			self.artilleryRangeValue2(Math.floor(Math.random() * 6) + 1);
		} // if
		
		if (parseFloat(self.nbArtilleryRange()) > 1) {
			self.artilleryRangeValue3(Math.floor(Math.random() * 8) + 1);
		} // if
    }
	
	self.artilleryRangeValue1Css = ko.computed(function() {
        return 'redd' + parseFloat(self.artilleryRangeValue1());
    }, self);
	
	self.artilleryRangeValue2Css = ko.computed(function() {
        return 'redd' + parseFloat(self.artilleryRangeValue2());
    }, self);
	
	self.artilleryRangeValue3Css = ko.computed(function() {
        return 'redd' + parseFloat(self.artilleryRangeValue3());
    }, self);
	self.dtCreated = null;
	self.dtModified = null;
	self.framePictureUrl = ko.observable('');
	self.nbRockets = ko.observable(0);
	self.removeRockets = function() {
		if (parseFloat(self.nbRockets()) > 0) {
			self.nbRockets(self.nbRockets() - 1);
		} // if
    }
	self.rocketsValue1 = ko.observable(0);
	self.rollRockets = function() {
		if (parseFloat(self.nbRockets()) > 0) {
			self.rocketsValue1(Math.floor(Math.random() * 8) + 1);
		} // if
    }
	
	self.rocketsValue1Css = ko.computed(function() {
        return 'redd' + parseFloat(self.rocketsValue1());
    }, self);
	
	self.setId = function(pId) {
		self.id = pId;
	};

	self.setName = function(pName) {
		self.name = pName;
	};

	self.setFramePictureUrl = function(pFramePictureUrl) {
		self.framePictureUrl = pFramePictureUrl;
	};

	self.setNbDefensive = function(pNbDefensive) {
		self.nbDefensive = pNbDefensive;
	};

	self.setNbMovement = function(pNbMovement) {
		self.nbMovement = pNbMovement;
	};

	self.setNbSurveillanceCommunication = function(pNbSurveillanceCommunication) {
		self.nbSurveillanceCommunication = pNbSurveillanceCommunication;
	};

	self.setNbHandToHand = function(pNbHandToHand) {
		self.nbHandToHand = pNbHandToHand;
	};

	self.setNbDirectFire = function(pNbDirectFire) {
		self.nbDirectFire = pNbDirectFire;
	};

	self.setNbArtilleryRange = function(pNbArtilleryRange) {
		self.nbArtilleryRange = pNbArtilleryRange;
	};

	self.setNbRockets = function(pNbRockets) {
		self.nbRockets = pNbRockets;
	};
	
	self.isFrameStillActive = function() {
		var nbSystems = parseFloat(self.nbWild()) + 
						parseFloat(self.nbDefensive()) + 
						parseFloat(self.nbMovement()) + 
						parseFloat(self.nbSurveillanceCommunication()) + 
						parseFloat(self.nbHandToHand()) + 
						parseFloat(self.nbDirectFire()) + 
						parseFloat(self.nbArtilleryRange());
		
		if (nbSystems === 0) {
			//alert('self.company().name() : ' + self.company.name());
			self.company.removeFrame(self);
		} // if
	};
	
	self.resetDiceValues = function() {
		self.wildValue1(parseFloat(0));
		self.wildValue2(parseFloat(0));
		
		self.defensiveValue1(parseFloat(0));
		self.defensiveValue2(parseFloat(0));
		
		self.movementValue1(parseFloat(0));
		self.movementValue2(parseFloat(0));
		self.movementValue3(parseFloat(0));
		
		self.surveillanceCommunicationValue1(parseFloat(0));
		self.surveillanceCommunicationValue2(parseFloat(0));
		
		self.handToHandValue1(parseFloat(0));
		self.handToHandValue2(parseFloat(0));
		self.handToHandValue3(parseFloat(0));
		
		self.directFireValue1(parseFloat(0));
		self.directFireValue2(parseFloat(0));
		self.directFireValue3(parseFloat(0));
		
		self.artilleryRangeValue1(parseFloat(0));
		self.artilleryRangeValue2(parseFloat(0));
		self.artilleryRangeValue3(parseFloat(0));
		
		self.rocketsValue1(parseFloat(0));
	};
}