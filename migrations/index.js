require("../app/models/Users");
require("../app/models/Stories");
require("../app/models/Tags");
require("../app/models/StoryTags");

var sequelize = require("../app/common/mysql");

sequelize.sync({force: true}).then(function(){
    console.log("|--- All tables was recreated ---|");
    process.exit(0);
});
