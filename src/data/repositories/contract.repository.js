class ContractRepository {
  constructor({ db }) {
    this._db = db;
  }

  async createContract(contractInfo) {
    try {
      let newContract = await this._db.Contract.create({
        ...contractInfo
      });

      return newContract;
    } catch (error) {
      console.error(error.errors[0].message);
    }
  }

  async getContracts() {
    const contracts = await this._db.Contract.findAll();
    return contracts;
  }
}

module.exports = ContractRepository;
