import rds from 'randomstring';

const generateCode = (prefix) => `${prefix}-${rds.generate({ length: 10 })}`;

export default { generateCode };
