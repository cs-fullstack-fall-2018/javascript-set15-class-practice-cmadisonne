class Phone{
    constructor(phoneName, storageLimit, isAndroid, screenSize, hasHeadPhoneJack )
    {
        this.phoneName = phoneName;
        this.storageLimit = storageLimit;
        this.isAndroid = isAndroid;
        this.screenSize = screenSize;
        this.hasHeadPhoneJack = hasHeadPhoneJack;
    }

    printFunction()
    {
        alert(this.phoneName + this.storageLimit + this.isAndroid + this.screenSize + this.hasHeadPhoneJack);
    }

}

function main() {
var maddiPhone = new Phone("Iphone", 64, "false", 3, "true");
}

main();