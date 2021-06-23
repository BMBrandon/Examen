export class Persona{
    id:number;
    nombre:string;
    apellido:string;
    cedula:string;
    edad:string;
    peso:string
    altura:string;
    correo:string;
    telefono:string;
    constructor(id:number , nombre:string , apellido:string , cedula:string, edad:string, peso:string, altura:string, correo:string , telefono:string ){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.cedula=cedula;
        this.edad=edad;
        this.peso=peso;
        this.altura=altura;
        this.correo=correo;
        this.telefono=telefono;
    }
}