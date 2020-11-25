export default function() {
  return [
    {
      title: "Главная страница",
      to: "/",
      htmlBefore: '<i class="material-icons">info</i>',
      htmlAfter: ""
    },
    {
      title: "Инвентарь",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/inventory",
    },
    {
      title: "Мой склад",
      htmlBefore: '<i class="material-icons">store</i>',
      to: "/warehouse",
      children: [
        {
          to: '/warehouse/tasks',
          title: 'Задачи складу'
        },
        {
          to: '/warehouse/sended',
          title: 'Отправлено'
        },
        {
          to: '/warehouse/on',
          title: 'На складе'
        }
      ]
    },
    {
      title: "Аукцион",
      htmlBefore: '<i class="material-icons">gavel</i>',
      to: "/auction",
    },
    {
      title: "Пользователи",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/users",
    },
    {
      title: "Настройки",
      htmlBefore: '<i class="material-icons">settings</i>',
      to: "/settings",
    },
    {
      title: "Сообщения",
      htmlBefore: '<i class="material-icons">message</i>',
      to: "/messages",
    },
    {
      title: "Финансы",
      htmlBefore: '<i class="material-icons">monetization_on</i>',
      to: "/finance",
    },
    {
      title: "Мои заказы",
      htmlBefore: '<i class="material-icons">message</i>',
      to: "/orders",
    },
  ];
}
