import { Sequelize } from 'sequelize';
import { URI_DATABASE } from '../config/config.js';
import { models } from '../models/index.models.js';
const conn = new Sequelize(URI_DATABASE, { logging: false, native: false });

models.forEach((model) => {
  model(conn);
});

const {
  Cart,
  CartDetail,
  Category,
  Comment,
  Income,
  IncomeDetail,
  Order,
  OrderDetail,
  Payment,
  Product,
  Reaction,
  Reply,
  Supplier,
  User,
} = conn.models;

Category.hasMany(Product);
Product.belongsTo(Category);

Supplier.hasMany(Product);
Product.belongsTo(Supplier);

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.hasMany(CartDetail);
CartDetail.belongsTo(Cart);

Supplier.hasMany(Income);
Income.belongsTo(Supplier);

Income.hasMany(IncomeDetail);
IncomeDetail.belongsTo(Income);

IncomeDetail.hasMany(Product);
Product.hasMany(IncomeDetail);

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(OrderDetail);
OrderDetail.belongsTo(Order);

OrderDetail.hasMany(Product);
Product.hasMany(Order);

User.hasMany(Comment);
Comment.belongsTo(User);

Product.hasMany(Comment);
Comment.belongsTo(Product);

Order.hasOne(Payment);
Payment.hasOne(Order);

User.hasMany(Payment);
Payment.belongsTo(Order);

Comment.hasMany(Reply);
Reply.belongsTo(Comment);

User.hasMany(Reply);
Reply.belongsTo(User);

User.hasMany(Reaction);
Reaction.belongsTo(User);

Product.hasMany(Reaction);
Reaction.belongsTo(Product);

export {
  conn,
  Cart,
  CartDetail,
  Category,
  Comment,
  Income,
  IncomeDetail,
  Order,
  OrderDetail,
  Payment,
  Product,
  Reaction,
  Reply,
  Supplier,
  User,
};
