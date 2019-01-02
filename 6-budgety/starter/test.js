var budgetController = (function() {
    var Income = function(type, description, value) {
        this.type = type,
        this.description = description,
        this.value = value
    }
    
    var Expense = function(type, description, value) {
        this.type = type,
        this.description = description,
        this.value = value
    }
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }
    
    
    
}) ();

var UIControllers = (function() {
    var DOMstrings = {
        submitBTN: '.add__btn',
        typeField: '.add__type',
        descriptionField: '.add__description',
        valueField: '.add__value'
    }
    
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.typefield).value,
                description: document.querySelector(DOMstrings.descriptionField).value,
                value: document.querySelector(DOMstrings.valueField).value
            };
        }
    }
    
    return {
        getDOMstrings: function() {
            return DOMstrings;
        }
    }
})();

var globalController = (function(budgetC, UIC) {
    var DOM = UIC.getDOMstrings;
    
    var setupEventListeners = function() {
        document.querySelector(DOM.submitBTN).addEventListener('click', addToCtrlr);
         document.addEventListener('keypress', function(event){
             if (event.keyCode === 13 || event.which === 13) {
                 addToCtrlr();
             }
         });        
    };
    
    var addToCtrlr = function() {
        var input, newItem;
        
        // Read the input
        input = UIC.getInput();
        
        //Add the input to the Global Controller
        input = budgetC.addItem(input.type, input.description, input.value);
    };
    
    return {
        init: function(){
            console.log('Application has started');
            setupEventListeners();
        }
    }
    
})(budgetController, UIController);