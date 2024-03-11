import {PeopleAccount} from './class/PeopleAccount'
import {CompanyAccount} from "./class/CompanyAccount"
import { GoldAccount } from './class/GoldAccont'


const pessoa01: PeopleAccount = new PeopleAccount(12345678, 'Vinicius Alochio', 1)
pessoa01.setName('Vinicius Alochio')
pessoa01.getName()
pessoa01.deposit(120)
pessoa01.withdraw(12)


const empresa01: CompanyAccount = new CompanyAccount('Empresa', 2)
empresa01.setName('Companhia S.A.')
empresa01.deposit(155)
empresa01.withdraw(101)
empresa01.getLoan(1000)

const goldAccount: GoldAccount = new GoldAccount('cliente gold', 3)
goldAccount.setName('Vinícius Alochio Santos')
goldAccount.deposit(100)
goldAccount.withdraw(35)




