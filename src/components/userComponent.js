import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"//sonunca js ekle

console.log("User component yüklendi")

let logger1 = new ElasticLogger()//log kısmını buradan istediğimiz gibi değiştirebiliyoruz
let userService = new UserService(logger1)

let user1 = new User(1, "ahmet", "yıldız", "antalya")
let user2 = new User(2, "baran", "gökçekli", "muğla") //nesne oluşturduk

userService.add(user1)
userService.add(user2)
userService.getById(1)
userService.list()
