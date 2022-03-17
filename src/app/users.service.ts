export class usersInfoService{

    users: {name:String , pass:String}[]=[];

    addUser(name:String , pass:String){

        this.users.push({name:name , pass:pass});
        console.log(this.users);
        
    }

    deleteUser(id : number){

        this.users.splice(id,1)
    }



}