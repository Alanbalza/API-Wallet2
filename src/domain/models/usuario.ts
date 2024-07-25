import { Document, Schema, model } from 'mongoose';

// Definir la interfaz para el modelo Usuario
export interface IUsuario extends Document {
  nombre: string;
  apellido: string;
  correo: string;
  contraseña: string;
  telefono: string;
}

// Definir el esquema para el modelo Usuario
const usuarioSchema = new Schema<IUsuario>({
  nombre: {
    type: String,
    required: true,
  },
  apellido:{
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
});

// Definir el modelo Usuario
const Usuario = model<IUsuario>('Usuario', usuarioSchema);

export default Usuario;
