export const BRANDS = [
  'Christian Louboutin',
  'Jimmy Choo',
  'Manolo Blahnik',
  'Stuart Weitzman',
  'Valentino',
  'Allen Edmonds',
  'Clarks',
  'Gucci',
  'Cole Haan',
  'Timberland',
  'Stride Rite',
  'Geox',
  'Nike',
  'Skechers',
  'Adidas',
  'Zara',
  'H&M',
  'Chanel',
  'Michael Kors',
  'Ralph Lauren',
  'Hugo Boss',
  "Levi's",
  'Tommy Hilfiger',
  'Uniqlo',
  "Carter's",
  "OshKosh B'gosh",
  'Gap',
  'Old Navy',
];

export const COLORS = [
  'Rojo',
  'Azul',
  'Verde',
  'Amarillo',
  'Naranja',
  'Morado',
  'Rosa',
  'Negro',
  'Blanco',
  'Gris',
  'Marrón',
  'Beige',
  'Turquesa',
  'Dorado',
  'Plateado',
  'Violeta',
  'Fucsia',
  'Azul Marino',
  'Verde Oliva',
  'Lila',
];

export const REACTIONS = ['Like', 'Unlike'];

export const ORDER_STATUS = [
  'Pendiente', //El pedido ha sido creado pero aún no ha sido procesado.
  'En proceso', //El pedido está siendo preparado y empaquetado para el envío.
  'Enviado', // El pedido ha sido enviado al cliente y está en tránsito.
  'Entregado', // El pedido ha sido entregado al cliente.
  'Cancelado', // El pedido ha sido cancelado antes de ser enviado.
  'Reembolsado', // El pedido ha sido devuelto y el cliente ha recibido un reembolso.
  'Fallido', // El pago del pedido ha fallado o no se ha completado correctamente.
  'En espera', // El pedido está en espera por alguna razón, como verificación adicional o falta de stock.
  'Completado', // El pedido ha sido entregado y no se esperan más acciones.
  'Devuelto', // El cliente ha devuelto el pedido después de la entrega.
];

export const PAYMENT_STATUS = [
  'Pendiente', // El pago ha sido iniciado pero aún no ha sido completado.
  'Completado', // El pago ha sido realizado con éxito.
  'Fallido', // El pago no se ha podido completar debido a un error.
  'Reembolsado', // El pago ha sido devuelto al cliente.
  'Cancelado', // El pago ha sido cancelado antes de completarse.
  'En verificación', //  El pago está en espera por alguna razón, como verificación adicional o problemas técnicos.
  'Disputado', // El pago está en disputa, generalmente porque el cliente ha iniciado una reclamación.
  'Autorizado', // El pago ha sido autorizado pero aún no ha sido capturado.
  'Capturado', // El pago ha sido autorizado y el dinero ha sido transferido.
];

export const ROLES = ['Administrador', 'Super Administrador', 'Cliente'];
