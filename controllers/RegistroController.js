const Registro = require('../models/Registro')

module.exports = class RegistroController{
    static async showHome(req, res){
        const data = new Date();
        const dia = String(data.getDate()).padStart(2, '0')
        const mes = String(data.getMonth()+ 1).padStart(2, '0')
        const ano = data.getFullYear()

        
        const diasDaSemana = new Array('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado')
        const diaAtual = diasDaSemana[data.getDay()]

        const dataAtual = `${dia}/${mes}/${ano} - ${diaAtual} `
        
        const hora = data.getHours()
        const minutos = data.getMinutes()
        const segundos = data.getSeconds()

        const horaAtual = `${hora}:${minutos}:${segundos}`

        var saudacao = ''
        if(hora >=6 && hora<=12){
            var bomDia = "Bom dia!"
            saudacao = bomDia
        }else if(hora >12 && hora<=18){
            var boaTarde = "Boa Tarde!"
            saudacao= boaTarde
        }else if(hora >18 && hora<=0){
            var boaNoite = "Boa noite!"
            saudacao = boaNoite
        }
        console.log(saudacao)

        res.render('registro/home',{dataAtual, horaAtual, saudacao})
    }

    static async geolocalizacao(req, res){
        const data = new Date();
        const dia = String(data.getDate()).padStart(2, '0')
        const mes = String(data.getMonth()+ 1).padStart(2, '0')
        const ano = data.getFullYear()

        
        const diasDaSemana = new Array('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado')
        const diaAtual = diasDaSemana[data.getDay()]

        const dataAtual = `${dia}/${mes}/${ano} - ${diaAtual} `
        
        const hora = data.getHours()
        const minutos = data.getMinutes()
        const segundos = data.getSeconds()

        const horaAtual = `${hora}:${minutos}:${segundos}`

        var saudacao = ''
        if(hora >=6 && hora<=12){
            var bomDia = "Bom dia!"
            saudacao = bomDia
        }else if(hora >12 && hora<=18){
            saudacao="Boa Tarde!"
        }else if(hora >18 && hora<=0){
            var boaNoite = "Boa noite!"
            saudacao = boaNoite
        }
        console.log(saudacao)
       

        
       

        res.render('registro/geolocalizacao',{dataAtual, horaAtual, saudacao})
    }

    static async camera(req, res){
        const data = new Date();
        const dia = String(data.getDate()).padStart(2, '0')
        const mes = String(data.getMonth()+ 1).padStart(2, '0')
        const ano = data.getFullYear()

        
        const diasDaSemana = new Array('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado')
        const diaAtual = diasDaSemana[data.getDay()]

        const dataAtual = `${dia}/${mes}/${ano} - ${diaAtual} `
        
        const hora = data.getHours()
        const minutos = data.getMinutes()
        const segundos = data.getSeconds()

        const horaAtual = `${hora}:${minutos}:${segundos}`

        var saudacao = ''
        if(hora >=6 && hora<=12){
            var bomDia = "Bom dia!"
            saudacao = bomDia
        }else if(hora >12 && hora<=18){
            saudacao="Boa Tarde!"
        }else if(hora >18 && hora<=0){
            var boaNoite = "Boa noite!"
            saudacao = boaNoite
        }
   

        const {latitude, longitude, link} = req.body
        
        const registro = {
            data: dataAtual, 
            hora: horaAtual,
            latitude:latitude,
            longitude:longitude,
            imagem: link
        }
        
        try{
            const createdRegistro= await Registro.create(registro)

            const resultado = registro
           
            
            req.session.save(()=>{
                res.render('/registro/relatorio',{resultado})
            })

        }catch(err){
            console.log(err)
        }

        
        res.render('registro/camera',{dataAtual, horaAtual, saudacao})
    }

    static async relatorio(req, res){
        const registrosData= await Registro.findAll({
            
        })

        const registros= registrosData.map((result) => result.dataValues)
        console.log(registros)
        res.render('registro/relatorio',{registros})
    }
}