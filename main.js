// Crear la clase Persona, con propiedades nombre, edad y género, y el método 
// obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona{
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
     }

obtDetalles() {
    console.log(`Me llamo ${this.nombre} tengo ${this.edad} y soy un/a ${this.genero} `);
  }
}

let miPersona = new Persona ("Daniela", 29 , "chica");
miPersona.obtDetalles()




// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método 
// registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero)
        this.curso = curso;
        this.grupo = grupo;
    }

    registrar() {
        console.log(`Me llamo ${this.nombre} tengo ${this.edad} y soy un/a ${this.genero} del curso de ${this.curso} ${this.grupo} `);
    }
};

let miEstudiante= new Estudiante ("Ignazio", 28 , "chico", "opera","grupo 2");
miEstudiante.registrar()


// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método 
// asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero)
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
asignar() {
    console.log(`Mi nombre es ${this.nombre} tengo ${this.edad}  soy un/a ${this.genero}, mi clase es  ${this.asignatura} nivel ${this.nivel} `);
 }
};

let miProfesor= new Profesor ("Piero", 29 , "chico", "opera","alto");
miProfesor.asignar()


