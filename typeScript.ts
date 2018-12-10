 class University {
 name : string;
 dept : string;
 
 contructor(uname:string , udept:string)
 {
    this.name = uname ;
    this.dept = udept;
 }

 graduation(year : number)
 {
     console.log('Graduating ${this.dept} ${year} students');
 }
}

const uni = new University("MUM","Computer Science");
uni.graduation(2018);