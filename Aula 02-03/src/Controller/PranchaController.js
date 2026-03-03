import { prismaClient } from "../../prisma/prisma.js";

class PranchaController {

    constructor() { }
    async getTodasAsPranchas(req,res){
        try {
            const pranchas = await prismaClient.prancha.findMany();
            return res.json(pranchas)
        } catch (error) {
            console.log(error)
        }
    }

    async CriarPrancha(req,res){
        try {
            const {body} = req
            const prancha = await prismaClient.prancha.create({
                data: {
                    marca: "",
                    modelo: "",
                    tipo: "",
                    cor: "",
                    material: "",
                    volume: "",
                    quantidadeEstoque: "",
                    descricao: "", 
                }
            })
        } catch (error) {
            
        }
    }

    async updatePrancha(req,res) {
        try {
            const {params, body} = req;
            const {id, marca, modelo, ...descricao} = body;
        } catch (error) {
            
        }
    }

}
export const PranchaController = new PranchaController();