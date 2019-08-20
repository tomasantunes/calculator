function AppViewModel() {
	var self = this;
	self.num1 = ko.observable('');
	self.num2 = ko.observable('');
	self.operator = ko.observable('');
	self.total = ko.observable('');
	self.display = ko.observable('');

	self.handleButton = function(data, event) {
		let digit = event.target.textContent;
        if (digit >= '0' && digit <= '9') {
            self.handleNumber(digit);
        }
        else {
            self.handleOperator(digit);
        }
	}

	self.restart = function() {
		self.num1('');
        self.num2('');
        self.operator('');
        self.total('');
        self.setDisplay('');
	}

	self.handleNumber = function(num) {
	    if (self.num1() === '') {
	        self.num1(num);
	    }
	    else {
	        self.num2(num);
	    }
	    self.setDisplay(num);
	}

	self.handleOperator = function(oper) {
	    if (self.operator() === '') {
	        self.operator(oper);
	    } else {
	        self.handleTotal();
	        self.operator(oper);
	    }
	}

	self.handleTotal = function() {
	    switch (self.operator()) {
	        case '+':
	            self.total(+self.num1() + +self.num2());
	            console.log(self.num1());
	            console.log(self.num2());
	            self.setDisplay(self.total());
	            break;
	        case '-':
	            self.total(+self.num1() - +self.num2());
	            self.setDisplay(self.total());
	            break;
	        case '/':
	            self.total(+ self.num1() / +self.num2());
	            self.setDisplay(self.total());
	            break;
	        case 'X':
	            self.total(+ self.num1() * +self.num2());
	            self.setDisplay(self.total());
	            break;
	    }
	    self.updateVariables();
	}

	self.setDisplay = function(num) {
	    self.display(num);
	}

	self.updateVariables = function() {
	    self.num1(self.total);
	    self.num2('');
	}

	self.init = function() {

	}

	self.init();
}

ko.applyBindings(new AppViewModel(), document.getElementById("app"));











