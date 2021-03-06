const { Model } = require('objection');
const knex = require('../config/config')
Model.knex(knex)

class Blogs extends Model {
  static get tableName() {
    return 'blogs';
  }
  static get jsonSchema() {
    return {
        type : Object,
        required : ['title'],
        properties: {             
            id: { type: 'integer' },
            title: { type: 'string' },
            description: { type: 'string' },
            author: { type: 'string' },
    }
}
}
}
module.exports = Blogs;
