var House = require {
    constructor (houseName,email,houseType) {
        this.houseName = houseName;
        this.email = email;
        this.houseType = houseType;
},
add ({newhouseName,newemail,newhouseType}){
    this.houseName = newhouseName,
    this.email = newemail,
    this.houseType = newhouseType;

    return {
        houseName: this.houseName,
        email: this.email,
        houseType: this.houseType
    }

},

};

const house1 = new House('fghhj','hgdf','fdsss')