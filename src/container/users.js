class Usuario{
  constructor(name,last_name) {
    this.name = name;
    this.last_name = last_name;
    this.books = [];
    this.pets = [];
  }
  getfullname = function(){
    return (`${this.name} ${this.last_name}`)
  }
  addPet = function(pet){
    return this.pets.push(pet)
  };

  countPets = function(){
    return (this.pets.length)
  };
  addBook = function(title, author){
    return this.books.push({title:title, author:author})
   
  };

  getBookTitles = ()=>{
    this.books.map((book)=>{
      return console.log(`${book.title}`);
    });
   
  };
 
}

let Usuario1= new Usuario('Gabriela', 'Arenas');
let Usuario2= new Usuario('German', 'Burgos');
let Usuario3= new Usuario('Jose', 'Fino');
let Usuario4= new Usuario('Nina', 'Bobina');


Usuario1.addBook('El túnel ', 'Ernesto Sábato')
Usuario1.addBook('Almas Muertas', 'Nikolai Gogol')
Usuario1.addBook('Don Quijote de la Mancha ', 'Miguel de Cervantes')
Usuario1.addBook('Relatos Cortos', 'Antón Chéjov')
Usuario1.addPet('Perico')
Usuario1.addPet('Meloso')




console.log(Usuario2.getfullname());
console.log(Usuario1.countPets());
console.log(Usuario1.books);
(Usuario1.getBookTitles());



