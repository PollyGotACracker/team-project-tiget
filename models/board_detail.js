import Sequelize from "sequelize";
export default (sequelize) => {
  return sequelize.define(
    "board_detail",
    {
      seq: {
        type: Sequelize.DataTypes.BIGINT,
        primarykey,
        auto_increment,
      },
      b_nickname: {
        type: Sequelize.DataTypes.STRING(256),
        allowNull: true,
      },
      b_title: {
        type: Sequelize.DataTypes.STRING(256),
        allowNull: false,
      },
      b_content: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
      },
      b_img: {
        type: Sequelize.DataTypes.STRING(256),
        allowNull: true,
      },
      sort_board: {
        type: Sequelize.DataTypes.STRING(256),
        allowNull: false,
      },
      b_update_date: {
        type: Sequelize.DataTypes.STRING(256),
        allowNull: false,
      },
      b_modified_date: {
        type: Sequelize.DataTypes.STRING(256),
        allowNull: false,
      },
      b_remove_date: {
        type: Sequelize.DataTypes.STRING(256),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "board_detail",
      timestamps: false,
    }
  );
};