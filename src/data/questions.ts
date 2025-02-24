export interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Что такое операционная система?",
    answers: [
      {
        text: "Это просто программа на компьютере, как и другие - Word или Chrome",
        isCorrect: false,
      },
      {
        text: "Это показатель того, какой процессор используется на компьютере. Например, 32-битный или 64-битный",
        isCorrect: false,
      },
      {
        text: "Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем",
        isCorrect: true,
      },
      { text: `Нет такого понятия, есть понятие "файловая система"`, isCorrect: false },
    ],
  },
  {
    id: 2,
    text: "Является ли Android операционной системой?",
    answers: [
      {
        text: "Да, это такая же ОС, как и другие, просто для мобильных девайсов",
        isCorrect: true,
      },
      { text: "Нет, операционные системы бывают только для ПК", isCorrect: false },
      {
        text: "Нет, Android это программа, которая ставится на операционную систему девайса. ОС на разных девайсах разные",
        isCorrect: false,
      },
      { text: "Это домашняя страничка в настройках вашего браузера", isCorrect: false },
    ],
  },
  {
    id: 3,
    text: "Что такое процессор компьютера?",
    answers: [
      {
        text: "Это блок, внутри которого находится дисковод и много разъемов для монитора, клавиатуры и компьютерной мышки",
        isCorrect: false,
      },
      { text: "Это общее название всех комплектующих компьютера", isCorrect: false },
      {
        text: "Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств",
        isCorrect: true,
      },
      {
        text: "Это суммарный показатель вычислительной мощности компьютера, например 2,7 ГГц",
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    text: "Какие бывают разрядности у современных процессоров?",
    answers: [
      { text: "32 и 64 бита", isCorrect: true },
      { text: "12 и 32 бита", isCorrect: false },
      { text: "15 и 32 бита", isCorrect: false },
      { text: "86 и 64 бита", isCorrect: false },
    ],
  },
  {
    id: 5,
    text: "Какой тип процессора чаще всего используют мобильные девайсы?",
    answers: [
      {
        text: "iOS использует Intel, остальные используют AMD",
        isCorrect: false,
      },
      { text: "Чаще всего используют Intel", isCorrect: false },
      {
        text: "Чаще всего используют AMD",
        isCorrect: false,
      },
      {
        text: "Чаще всего используют ARM",
        isCorrect: true,
      },
    ],
  },
  {
    id: 6,
    text: "Для чего компьютеру нужна RAM?",
    answers: [
      {
        text: "Для быстрого доступа к данным",
        isCorrect: true,
      },
      { text: "Для долгосрочного хранения данных", isCorrect: false },
      {
        text: "Для правильной фрагментации памяти",
        isCorrect: false,
      },
      {
        text: "Для дефрагментации данных",
        isCorrect: false,
      },
    ],
  },
  {
    id: 7,
    text: "Чем отличается HDD от SSD?",
    answers: [
      {
        text: "HDD - это твердотельный накопитель без подвижных частей. Более дешевый, чем SSD. HDD работает быстрее",
        isCorrect: false,
      },
      {
        text: "HDD - это твердотельный накопитель без подвижных частей. Более дорогой, чем SSD. HDD работает быстрее",
        isCorrect: false,
      },
      {
        text: "SSD - это твердотельный накопитель без подвижных частей. Более дешевый, чем HDD. SSD работает быстрее",
        isCorrect: false,
      },
      {
        text: "SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее",
        isCorrect: true,
      },
    ],
  },
  {
    id: 8,
    text: "Как отличаются между собой USB?",
    answers: [
      {
        text: "Бывают только USB 2.0 и 3.2",
        isCorrect: false,
      },
      { text: "Бывают только micro-USB и mini-USB", isCorrect: false },
      {
        text: "USB отличаются по пропускной способности (micro-USB, mini-USB, lightning и т.д.) и форме (USB 2.0, USB 3.2)",
        isCorrect: false,
      },
      {
        text: "USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2)",
        isCorrect: true,
      },
    ],
  },
  {
    id: 9,
    text: "Какой файловой системы не существует?",
    answers: [
      {
        text: "Fat",
        isCorrect: false,
      },
      { text: "NTFS", isCorrect: false },
      {
        text: "APFS",
        isCorrect: false,
      },
      {
        text: "BolSFS",
        isCorrect: true,
      },
    ],
  },
];
