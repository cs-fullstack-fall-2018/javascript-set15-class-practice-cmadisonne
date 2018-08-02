class Dinner{
    constructor(dishName , protein , veggie , price){
        this.dishName = dishName;
        this.protein = protein;
        this.veggie = veggie;
        this.price = price;
    }

    printEachAttribute(){
        document.write(this.dishName + this.protein + this.veggie + this.price);
    }
}

function main() {
var MaddiDinner = new Dinner("Crab Linguine", "Crab & Pasta", "Spinach", 15 );
}

main();