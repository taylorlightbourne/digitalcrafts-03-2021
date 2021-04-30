'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Associations', [{
      Doctor: 'Dr. Jeune',
      Patient: 'Taylor Lightbourne',
      Appointment: "01-11-2021",
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Associations', null, {});
  }
};