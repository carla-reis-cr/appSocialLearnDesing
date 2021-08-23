import { PostType } from "../models/post.interface";
import api from "./api";

const usuarioService={
  async cadastrar(data: PostType){
    return api({
      url: "http://localhost:3000/posts/create",
      method:"POST",
      timeout:5000,
      data: data,
      headers: {
        Accept: 'application/json'
      }
    }).then((response)=>{
      return Promise.resolve(response)
    }).catch((error)=>{
      return Promise.reject(error)
    })
  }
};

export default usuarioService;