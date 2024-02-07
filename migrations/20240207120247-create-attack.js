'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('attack', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      severity: {
        type: Sequelize.STRING
      },
      killChainPhase: {
        type: Sequelize.STRING
      },
      timestamp: {
        type: Sequelize.DATE
      },
      attackerId: {
        type: Sequelize.STRING
      },
      attackerIp: {
        type: Sequelize.STRING
      },
      attackerName: {
        type: Sequelize.STRING
      },
      attackerPort: {
        type: Sequelize.STRING
      },
      decoyId: {
        type: Sequelize.STRING
      },
      decoyName: {
        type: Sequelize.STRING
      },
      decoyGroup: {
        type: Sequelize.STRING
      },
      decoyIp: {
        type: Sequelize.STRING
      },
      decoyPort: {
        type: Sequelize.STRING
      },
      decoyType: {
        type: Sequelize.STRING
      },
    }, {
      timestamps: false,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('attack');
  }
};