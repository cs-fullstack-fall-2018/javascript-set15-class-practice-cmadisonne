class GitHubUser{
    constructor(userName, fileName, descriptionOfRepository, code ){
        this.userName = userName;
        this.descriptionOfRepository = descriptionOfRepository;
        this.code = code;
    }

    printAttribute(){
        console.log(this.userName + this.descriptionOfRepository + this.code);
    }

}

function main() {
var myAccount = new GitHubUser("Maddi", "student", "CodeSchool", "433wsd");
}

main();