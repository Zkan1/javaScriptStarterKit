import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService {
    constructor(loggerService) {
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService

    }

    load() {
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) {//hata yok ise 
                        this.customers.push(user)

                    }

                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {//hata yok ise 
                        this.employees.push(user)

                    }

                    break;
                default:
                    this.errors.push(new DataError("Wrong user type", user))
                    break;
            }

        }
    }

    checkCustomerValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        //split'deki boşluk id firsName gibi ifadelerin arasındaki boşluklar hariç demek
        for (const field of requiredFields) {
            if (!user[field]) {// istenen fieldlar yoksa
                hasErrors = true
                this.errors.push(new DataError(`Validation Problem ${field} is required `
                    , user))// burada ``(altgr+,) ifadesinin içindeki ${}'ın içine javascript kodu yerleştirebiliyoruz
                // + kullanarak yazma ile arasında görünüm açısından fark yok  
                //ancak her + kullandığımızda program onun için bellekte yer ayırıyor
                //bellek kullanımı açısından üstteki kullanım daha iyi
            }
        }
        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation Problem ${user.age} is not a number `, user))
        }
        return hasErrors
    }

    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false

        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation Problem ${field} is required `, user))
            }
        }
        if (Number.isNaN(Number.parseInt(user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation Problem ${user.age} is not a number `, user))
        }
        return hasErrors
    }


    add(user) {
        //console.log("Kullancı eklendi"+ user)
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) {//hata yok ise 
                    this.customers.push(user)

                }

                break;
            case "employee":
                if (!this.checkEmployeeValidityForErrors(user)) {//hata yok ise 
                    this.employees.push(user)

                }

                break;

            default:
                this.errors.push(new DataError("This user cannot be added. Wrong user type", user))
                break;
        }
        this.loggerService.log(user)

    }

    listCustomers() {
        //console.log("Kullancılar listelendi")
        return this.customers
    }

    getCustomerById(id) {
        //console.log("Kullancı detayı getirildi")
        return this.customers.find(u=>u.id ===id)
    }

    getCustomersSorted(){
        return this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName<customer2.firstName){
                return -1
            }else if (customer1.firstName===customer2.firstName) {
                return 0
                
            }else{
                return 1
            }
        })
    }



}