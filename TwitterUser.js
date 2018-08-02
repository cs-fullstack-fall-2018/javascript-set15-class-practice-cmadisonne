class TwitterUser{
    constructor(userName, followNumber, followersNumber, pictureURL) {
        this.userName = userName;
        this.followNumber = followNumber;
        this.followersNumber = followersNumber;
        this.pictureURL = pictureURL;
    }
        printAttribute()
        {
            alert(this.userName + this.followNumber + this.followersNumber + this.pictureURL);
        }

}

function main()
{
    var myTwitt = new TwitterUser("@MaddiCoope", 843, 880, "djsdhui");
}

main();