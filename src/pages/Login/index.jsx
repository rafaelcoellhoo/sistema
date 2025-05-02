import { Link, Navigate, useNavigate } from "react-router-dom"
import svg from "/public/mobile-login-animate.svg"

export default function LoginPage() {
    const navigate = useNavigate()
  return (
    <div className="w-full h-screen flex">
        <div className="w-[40%] h-full flex items-center justify-center flex-col">
            <h1 className="text-[40px] font-bold">Faça seu login</h1>
            <div className="flex flex-col mt-8 relative">
                <label className="absolute -top-3 left-2 bg-white" htmlFor="email">E-mail</label>
                <input type="text" id="email" placeholder="fulanodetal@exemplo.com" className="w-[400px] pl-1 h-[40px] border-1 rounded-md bg-transparent" />
            </div>
            <div className="flex flex-col mt-8 relative">
                <label className="absolute -top-3 left-2 bg-white" htmlFor="senha">Senha </label>
                <input id="senha" type="password" placeholder="Insira a sua senha" className="w-[400px] h-[40px] pl-1 border-1 rounded-md bg-transparent" />
            </div>
            <Link to="/cadastro">Cadastrar</Link>
            <button onClick={() => navigate("/cadastro")}>
               Cadastrar
            </button>
            <button onClick={()=> window.location.href= "/cadastro" }>Cadastrar</button>
        </div>
        <div className="w-[60%] h-full bg-[#6366ee] flex flex-col items-center justify-center rounded-l-lg">
            <img width={600} src={svg} alt="imagem-animada" />
            <p className="text-white text-[20px] text-center font-bold w-[300px]">A melhor experiência de login que você já teve na sua vida!</p>
        </div>
  </div>
  )
}
