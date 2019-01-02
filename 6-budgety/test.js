var budgetController = (function() {
    var x = 25;
    var add = function(a){
        return x + a;
    }
    
    return {
        publicAccess: function(b) {
            return add(b);
        }
    }
    
}());

var UIController = (function() {
    
}());

var anotherController = (function(budgetCtrl, UICtrl) {
    var z = budgetCtrl.publicAccess(5);
    
    return {
        anotherPublic: function() {
            console.log(z);
        }
    }
    
}(budgetController, UIController));