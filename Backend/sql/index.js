class Master {
  constructor(data) {
    this.data = data;
  }
}
module.exports = new Master(require("../config/sql.json"));
