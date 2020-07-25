import { Repository, getRepository, DeleteResult } from "typeorm";
import Account from "../../entities/AccountModel";
import { IManager } from "../common/manager";
import transactions from "services/transactions";
import { create } from "domain";
import { STATUS_CODES } from "http";

interface AccountWithBalance extends Account {
  balance: number;
}

class AccountManager implements IManager {
  protected accountRepository: Repository<Account>;

  /**
   * FIXME
   * After defining the Account entity,
   * uncomment the lines in the constructor definition
   */
  constructor() {
    this.accountRepository = getRepository(Account);
  }

  /**
   * FIXME
   * Get an account
   *
   * Requirements:
   * - Derive balance (both debit and credit)
   */

  public async getAccount(accountId: string): Promise<AccountWithBalance> {
    // You are free to remove any lines below

    // FIXME You should derive account balance by aggregating all the transactions
    let accountBalanceDerived = 0.0;
    let selectedAccount = this.accountRepository.findOne(accountId);
    try{
      const blankAccount = <AccountWithBalance>new Account();
      /**
       * 
       * let transactions = (await selectedAccount).transactions
       * for(let i = 0; i < transactions.length; i++){
       *  accountBalanceDerived += transactions[i].amount;
       * }
       * blankAccount.balance = accountBalanceDerived;
       */
      blankAccount.id = (await selectedAccount).id;
      blankAccount.name = (await selectedAccount).name;
      blankAccount.transactions = (await selectedAccount).transactions;
  
      return blankAccount;
    } catch(error){
      
    }
  }

  /**
   * FIXME
   * create a new account
   */
  public async createAccount(details: Partial<Account>): Promise<Account> {
    let createdAccount = new Account();
    createdAccount.name = details.name;
    createdAccount.owner = details["user"];

    return this.accountRepository.save(createdAccount);
  }

  /**
   * FIXME
   * update account details
   */
  public async updateAccount(accountId: string, changes: Partial<Account>): Promise<Account> {
    let createdAccount = new Account();
    createdAccount.name = changes.name;
    createdAccount.id = accountId;

    return this.accountRepository.save(createdAccount);
  }

  /**
   * FIXME
   * delete account
   *
   * Requirements:
   * - Cascade and delete all transactions
   */
  public async deleteAccount(accountId: string): Promise<DeleteResult | void> {
    return this.accountRepository.delete(accountId);
  }
}

export default AccountManager;
