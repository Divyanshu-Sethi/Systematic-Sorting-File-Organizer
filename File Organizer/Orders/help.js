function helpFn() {
    console.log(`List Of All Commands -
                        1) Tree Command - node FO.js tree <dirpath>
                        2) Help Command - node FO.js help
                        3) Organize command - node FO.js organize <dirpath>
                                    
    `);
  }
  
  module.exports = {
    helpFnKey: helpFn,
  }
  