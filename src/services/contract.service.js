class ContractService {
  constructor({ contractRepository }) {
    this._contractRepository = contractRepository;
  }

  async createContract(contractInfo) {
    const newContract = await this._contractRepository.createContract(
      contractInfo
    );

    return newContract;
  }

  async getContracts() {
    const contracts = await this._contractRepository.getContracts();
    return contracts;
  }
}

module.exports = ContractService;
