import { useState } from "react";
import {
  Dimensions, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, useColorScheme, View, Platform,
} from "react-native";

import {
  Colors,
} from "react-native/Libraries/NewAppScreen";

export default function Start({ navigation, route }) {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: /*isDarkMode ? Colors.darker :*/ Colors.lighter,
    color: /*isDarkMode ? Colors.lighter :*/ Colors.darker,
  };

  const data = {
    title: "Что вас беспокоит?", buttons: [{
      buttonName: "Головная боль", title: "Как давно начались боли?", buttons: [{
        buttonName: "1-3 часа ", title: "Часто ли возникает проблема?", buttons: [{
          buttonName: "Да", title: "Головная боль связана с перенапряжением(спазмами?)", buttons: [{
            buttonName: "Да",
            title: "Для купирования боли рекомендуем выпить ИБУПРОФЕН 200мг (во время или после еды, обильно запивая водой)",
          }, {
            buttonName: "Нет",
            title: "Для купирования боли рекомендуем выпить ИБУПРОФЕН 200мг (во время или после еды, обильно запивая водой)",
          }],
        }, {
          buttonName: "Нет", title: "Головная боль связана с перенапряжением(спазмами?)", buttons: [{
            buttonName: "Да",
            title: "Для купирования боли рекомендуем выпить ИБУПРОФЕН 200мг (во время или после еды, обильно запивая водой)",
          }, {
            buttonName: "Нет",
            title: "Для купирования боли рекомендуем выпить ИБУПРОФЕН 200мг (во время или после еды, обильно запивая водой)",
          }],
        }],
      }, {
        buttonName: "около 6-12 часов", title: "Часто ли возникает проблема?", buttons: [{
          buttonName: "Да", title: "Головная боль вызывает тошноту, слабость, светобоязнь?", buttons: [{
            buttonName: "Да", title: "Принимали ли вы какие нибудь препараты?", buttons: [{
              buttonName: "Да",
              title: "На выбор сделать тест любой НПВС (Ибупрофен, Кеторол, Нимесулид) любой спазмолитик (Дротаверин, Но-Шпа, Спазмалин, Суматриптаны)",
              buttons: [{
                buttonName: "Да",
                title: "Если эффекта не последовало Советуем Вам незамедлитлительно обратиться к врачу\n\nЕсли симтомы не проходят долгое время Вам следует вызвать скорую помощь (ссылка на вызов платной и бесплатной)",
              }, {
                buttonName: "Нет",
                title: "Для купирования симптомов мигрени рекомендуем Вам принять суматриптан 100мг однократно\n\n" + "Для эффективной помощи рекомендуем обратиться к неврологу\n\nГоловные боли, серьезная проблема, которая может скрывать другие заболевания",
              }],
            }, {
              buttonName: "Нет",
              title: "На выбор сделать тест любой НПВС (Ибупрофен, Кеторол, Нимесулид) любой спазмолитик (Дротаверин, Но-Шпа, Спазмалин, Суматриптаны)",
              buttons: [{
                buttonName: "Да",
                title: "Если эффекта не последовало Советуем Вам незамедлитлительно обратиться к врачу\n\nЕсли симтомы не проходят долгое время Вам следует вызвать скорую помощь (ссылка на вызов платной и бесплатной)",
              }, {
                buttonName: "Нет",
                title: "Для купирования симптомов мигрени рекомендуем Вам принять суматриптан 100мг однократно\n\n" + "Для эффективной помощи рекомендуем обратиться к неврологу\n\nГоловные боли, серьезная проблема, которая может скрывать другие заболевания",
              }],
            }],
          }, {
            buttonName: "Нет", title: "Принимали ли вы какие нибудь препараты", buttons: [{
              buttonName: "Да",
              title: "На выбор сделать тест любой НПВС (Ибупрофен, Кеторол, Нимесулид) любой спазмолитик (Дротаверин, Но-Шпа, Спазмалин, Суматриптаны)",
              buttons: [{
                buttonName: "Да",
                title: "Если эффекта не последовало Советуем Вам незамедлитлительно обратиться к врачу\n\nЕсли симтомы не проходят долгое время Вам следует вызвать скорую помощь (ссылка на вызов платной и бесплатной)",
              }, {
                buttonName: "Нет",
                title: "Для купирования симптомов мигрени рекомендуем Вам принять суматриптан 100мг однократно\n\n" + "Для эффективной помощи рекомендуем обратиться к неврологу\n\nГоловные боли, серьезная проблема, которая может скрывать другие заболевания",
              }],
            }, {
              buttonName: "Нет",
              title: "На выбор сделать тест любой НПВС (Ибупрофен, Кеторол, Нимесулид) любой спазмолитик (Дротаверин, Но-Шпа, Спазмалин, Суматриптаны)",
              buttons: [{
                buttonName: "Да",
                title: "Если эффекта не последовало Советуем Вам незамедлитлительно обратиться к врачу\n\nЕсли симтомы не проходят долгое время Вам следует вызвать скорую помощь (ссылка на вызов платной и бесплатной)",
              }, {
                buttonName: "Нет",
                title: "Для купирования симптомов мигрени рекомендуем Вам принять суматриптан 100мг однократно\n\n" + "Для эффективной помощи рекомендуем обратиться к неврологу\n\nГоловные боли, серьезная проблема, которая может скрывать другие заболевания",
              }],
            }],
          }],
        }, {
          buttonName: "Нет", title: "Головная боль вызывает тошноту, слабость, светобоязнь?", buttons: [{
            buttonName: "Да", title: "Принимали ли вы какие нибудь препараты?", buttons: [{
              buttonName: "Да",
              title: "На выбор сделать тест любой НПВС (Ибупрофен, Кеторол, Нимесулид) любой спазмолитик (Дротаверин, Но-Шпа, Спазмалин, Суматриптаны)",
              buttons: [{
                buttonName: "Да",
                title: "Если эффекта не последовало Советуем Вам незамедлитлительно обратиться к врачу\n\nЕсли симтомы не проходят долгое время Вам следует вызвать скорую помощь (ссылка на вызов платной и бесплатной)",
              }, {
                buttonName: "Нет",
                title: "Для купирования симптомов мигрени рекомендуем Вам принять суматриптан 100мг однократно\n\n" + "Для эффективной помощи рекомендуем обратиться к неврологу\n\nГоловные боли, серьезная проблема, которая может скрывать другие заболевания",
              }],
            }, {
              buttonName: "Нет",
              title: "На выбор сделать тест любой НПВС (Ибупрофен, Кеторол, Нимесулид) любой спазмолитик (Дротаверин, Но-Шпа, Спазмалин, Суматриптаны)",
              buttons: [{
                buttonName: "Да",
                title: "Если эффекта не последовало Советуем Вам незамедлитлительно обратиться к врачу\n\nЕсли симтомы не проходят долгое время Вам следует вызвать скорую помощь (ссылка на вызов платной и бесплатной)",
              }, {
                buttonName: "Нет",
                title: "Для купирования симптомов мигрени рекомендуем Вам принять суматриптан 100мг однократно\n\n" + "Для эффективной помощи рекомендуем обратиться к неврологу\n\nГоловные боли, серьезная проблема, которая может скрывать другие заболевания",
              }],
            }],
          }, {
            buttonName: "Нет", title: "Принимали ли вы какие нибудь препараты", buttons: [{
              buttonName: "Да",
              title: "На выбор сделать тест любой НПВС (Ибупрофен, Кеторол, Нимесулид) любой спазмолитик (Дротаверин, Но-Шпа, Спазмалин, Суматриптаны)",
              buttons: [{
                buttonName: "Да",
                title: "Если эффекта не последовало Советуем Вам незамедлитлительно обратиться к врачу\n\nЕсли симтомы не проходят долгое время Вам следует вызвать скорую помощь (ссылка на вызов платной и бесплатной)",
              }, {
                buttonName: "Нет",
                title: "Для купирования симптомов мигрени рекомендуем Вам принять суматриптан 100мг однократно\n\n" + "Для эффективной помощи рекомендуем обратиться к неврологу\n\nГоловные боли, серьезная проблема, которая может скрывать другие заболевания",
              }],
            }, {
              buttonName: "Нет",
              title: "На выбор сделать тест любой НПВС (Ибупрофен, Кеторол, Нимесулид) любой спазмолитик (Дротаверин, Но-Шпа, Спазмалин, Суматриптаны)",
              buttons: [{
                buttonName: "Да",
                title: "Если эффекта не последовало Советуем Вам незамедлитлительно обратиться к врачу\n\nЕсли симтомы не проходят долгое время Вам следует вызвать скорую помощь (ссылка на вызов платной и бесплатной)",
              }, {
                buttonName: "Нет",
                title: "Для купирования симптомов мигрени рекомендуем Вам принять суматриптан 100мг однократно\n\n" + "Для эффективной помощи рекомендуем обратиться к неврологу\n\nГоловные боли, серьезная проблема, которая может скрывать другие заболевания",
              }],
            }],
          }],
        }],
      }, {
        buttonName: "Более 24 часа ", title: "Часто ли возникает проблема?", buttons: [{
          buttonName: "Да", title: "Головная боль вызывает тошноту, слабость, светобоязнь?", buttons: [{
            buttonName: "Да", title: "Принимали ли вы какие нибудь препараты?", buttons: [{
              buttonName: "Да",
              title: "На выбор сделать тест любой НПВС (Ибупрофен, Кеторол, Нимесулид) любой спазмолитик (Дротаверин, Но-Шпа, Спазмалин, Суматриптаны)",
              buttons: [{
                buttonName: "Да",
                title: "Если эффекта не последовало Советуем Вам незамедлитлительно обратиться к врачу\n\nЕсли симтомы не проходят долгое время Вам следует вызвать скорую помощь (ссылка на вызов платной и бесплатной)",
              }, {
                buttonName: "Нет",
                title: "Для купирования симптомов мигрени рекомендуем Вам принять суматриптан 100мг однократно\n\n" + "Для эффективной помощи рекомендуем обратиться к неврологу\n\nГоловные боли, серьезная проблема, которая может скрывать другие заболевания",
              }],
            }, {
              buttonName: "Нет",
              title: "На выбор сделать тест любой НПВС (Ибупрофен, Кеторол, Нимесулид) любой спазмолитик (Дротаверин, Но-Шпа, Спазмалин, Суматриптаны)",
              buttons: [{
                buttonName: "Да",
                title: "Если эффекта не последовало Советуем Вам незамедлитлительно обратиться к врачу\n\nЕсли симтомы не проходят долгое время Вам следует вызвать скорую помощь (ссылка на вызов платной и бесплатной)",
              }, {
                buttonName: "Нет",
                title: "Для купирования симптомов мигрени рекомендуем Вам принять суматриптан 100мг однократно\n\n" + "Для эффективной помощи рекомендуем обратиться к неврологу\n\nГоловные боли, серьезная проблема, которая может скрывать другие заболевания",
              }],
            }],
          }, {
            buttonName: "Нет", title: "Принимали ли вы какие нибудь препараты", buttons: [{
              buttonName: "Да",
              title: "На выбор сделать тест любой НПВС (Ибупрофен, Кеторол, Нимесулид) любой спазмолитик (Дротаверин, Но-Шпа, Спазмалин, Суматриптаны)",
              buttons: [{
                buttonName: "Да",
                title: "Если эффекта не последовало Советуем Вам незамедлитлительно обратиться к врачу\n\nЕсли симтомы не проходят долгое время Вам следует вызвать скорую помощь (ссылка на вызов платной и бесплатной)",
              }, {
                buttonName: "Нет",
                title: "Для купирования симптомов мигрени рекомендуем Вам принять суматриптан 100мг однократно\n\n" + "Для эффективной помощи рекомендуем обратиться к неврологу\n\nГоловные боли, серьезная проблема, которая может скрывать другие заболевания",
              }],
            }, {
              buttonName: "Нет",
              title: "На выбор сделать тест любой НПВС (Ибупрофен, Кеторол, Нимесулид) любой спазмолитик (Дротаверин, Но-Шпа, Спазмалин, Суматриптаны)",
              buttons: [{
                buttonName: "Да",
                title: "Если эффекта не последовало Советуем Вам незамедлитлительно обратиться к врачу\n\nЕсли симтомы не проходят долгое время Вам следует вызвать скорую помощь (ссылка на вызов платной и бесплатной)",
              }, {
                buttonName: "Нет",
                title: "Для купирования симптомов мигрени рекомендуем Вам принять суматриптан 100мг однократно\n\n" + "Для эффективной помощи рекомендуем обратиться к неврологу\n\nГоловные боли, серьезная проблема, которая может скрывать другие заболевания",
              }],
            }],
          }],
        }, {
          buttonName: "Нет", title: "Головная боль вызывает тошноту, слабость, светобоязнь?", buttons: [{
            buttonName: "Да", title: "Принимали ли вы какие нибудь препараты?", buttons: [{
              buttonName: "Да",
              title: "На выбор сделать тест любой НПВС (Ибупрофен, Кеторол, Нимесулид) любой спазмолитик (Дротаверин, Но-Шпа, Спазмалин, Суматриптаны)",
              buttons: [{
                buttonName: "Да",
                title: "Если эффекта не последовало Советуем Вам незамедлитлительно обратиться к врачу\n\nЕсли симтомы не проходят долгое время Вам следует вызвать скорую помощь (ссылка на вызов платной и бесплатной)",
              }, {
                buttonName: "Нет",
                title: "Для купирования симптомов мигрени рекомендуем Вам принять суматриптан 100мг однократно\n\n" + "Для эффективной помощи рекомендуем обратиться к неврологу\n\nГоловные боли, серьезная проблема, которая может скрывать другие заболевания",
              }],
            }, {
              buttonName: "Нет",
              title: "На выбор сделать тест любой НПВС (Ибупрофен, Кеторол, Нимесулид) любой спазмолитик (Дротаверин, Но-Шпа, Спазмалин, Суматриптаны)",
              buttons: [{
                buttonName: "Да",
                title: "Если эффекта не последовало Советуем Вам незамедлитлительно обратиться к врачу\n\nЕсли симтомы не проходят долгое время Вам следует вызвать скорую помощь (ссылка на вызов платной и бесплатной)",
              }, {
                buttonName: "Нет",
                title: "Для купирования симптомов мигрени рекомендуем Вам принять суматриптан 100мг однократно\n\n" + "Для эффективной помощи рекомендуем обратиться к неврологу\n\nГоловные боли, серьезная проблема, которая может скрывать другие заболевания",
              }],
            }],
          }, {
            buttonName: "Нет", title: "Принимали ли вы какие нибудь препараты", buttons: [{
              buttonName: "Да",
              title: "На выбор сделать тест любой НПВС (Ибупрофен, Кеторол, Нимесулид) любой спазмолитик (Дротаверин, Но-Шпа, Спазмалин, Суматриптаны)",
              buttons: [{
                buttonName: "Да",
                title: "Если эффекта не последовало Советуем Вам незамедлитлительно обратиться к врачу\n\nЕсли симтомы не проходят долгое время Вам следует вызвать скорую помощь (ссылка на вызов платной и бесплатной)",
              }, {
                buttonName: "Нет",
                title: "Для купирования симптомов мигрени рекомендуем Вам принять суматриптан 100мг однократно\n\n" + "Для эффективной помощи рекомендуем обратиться к неврологу\n\nГоловные боли, серьезная проблема, которая может скрывать другие заболевания",
              }],
            }, {
              buttonName: "Нет",
              title: "На выбор сделать тест любой НПВС (Ибупрофен, Кеторол, Нимесулид) любой спазмолитик (Дротаверин, Но-Шпа, Спазмалин, Суматриптаны)",
              buttons: [{
                buttonName: "Да",
                title: "Если эффекта не последовало Советуем Вам незамедлитлительно обратиться к врачу\n\nЕсли симтомы не проходят долгое время Вам следует вызвать скорую помощь (ссылка на вызов платной и бесплатной)",
              }, {
                buttonName: "Нет",
                title: "Для купирования симптомов мигрени рекомендуем Вам принять суматриптан 100мг однократно\n\n" + "Для эффективной помощи рекомендуем обратиться к неврологу\n\nГоловные боли, серьезная проблема, которая может скрывать другие заболевания",
              }],
            }],
          }],
        }],
      }],
    }, {
      buttonName: "Температура", title: "Как долго держится температура?", buttons: [{
        buttonName: "2-4 часа", title: "Выберите значение вашей температуры", buttons: [{
          buttonName: "38-39", title: "Принимали ли вы препараты? ", buttons: [{
            buttonName: "Не принимал",
            title: "В вашей ситуации следует принять парацетамол 500 мг, тщательно запить водой\n\nПринимайте достаточное количество жидкости это поможет снизить температуру",
          }, {
            buttonName: "Да, принимал", title: "Какой результат был?", buttons: [{
              buttonName: "Результата нет",
              title: "Если у вас стойкая температура более 24 часов, рекомендуем вызвать скорую помощь\n\nДлительная высокая температура может отрицательно влиять на организм",
            }, {
              buttonName: "Температура упала, но поднялась снова",
              title: "Если у вас стойкая температура более 24 часов, рекомендуем вызвать скорую помощь\n\nДлительная высокая температура может отрицательно влиять на организм",
            }],
          }],
        }, {
          buttonName: "39-41", title: "Принимали ли вы препараты? ", buttons: [{
            buttonName: "Не принимал",
            title: "В вашей ситуации следует принять парацетамол 500 мг, тщательно запить водой\n\nПринимайте достаточное количество жидкости это поможет снизить температуру",
          }, {
            buttonName: "Да, принимал", title: "Какой результат был?", buttons: [{
              buttonName: "Результата нет",
              title: "В вашей ситуации следует принять парацетамол 500 мг, тщательно запить водой\n\nПринимайте достаточное количество жидкости, это поможет снизить температуру",
            }, {
              buttonName: "Температура упала, но поднялась снова",
              title: "Если у вас стойкая температура более 24 часов, рекомендуем вызвать скорую помощь\n\nДлительная высокая температура может отрицательно влиять на организм",
            }],
          }],
        }],
      }, {
        buttonName: "6-12 часов", title: "Выберите значение вашей температуры", buttons: [{
          buttonName: "38-39", title: "Принимали ли вы препараты? ", buttons: [{
            buttonName: "Не принимал",
            title: "В вашей ситуации следует принять парацетамол 500 мг, тщательно запить водой\n\nПринимайте достаточное количество жидкости это поможет снизить температуру",
          }, {
            buttonName: "Да, принимал", title: "Какой результат был?", buttons: [{
              buttonName: "Результата нет",
              title: "Если у вас стойкая температура более 24 часов, рекомендуем вызвать скорую помощь\n\nДлительная высокая температура может отрицательно влиять на организм",
            }, {
              buttonName: "Температура упала, но поднялась снова",
              title: "Если у вас стойкая температура более 24 часов, рекомендуем вызвать скорую помощь\n\nДлительная высокая температура может отрицательно влиять на организм",
            }],
          }],
        }, {
          buttonName: "39-41", title: "Принимали ли вы препараты? ", buttons: [{
            buttonName: "Не принимал",
            title: "В вашей ситуации следует принять парацетамол 500 мг, тщательно запить водой\n\nПринимайте достаточное количество жидкости это поможет снизить температуру",
          }, {
            buttonName: "Да, принимал", title: "Какой результат был?", buttons: [{
              buttonName: "Результата нет",
              title: "В вашей ситуации следует принять парацетамол 500 мг, тщательно запить водой\n\nПринимайте достаточное количество жидкости, это поможет снизить температуру",
            }, {
              buttonName: "Температура упала, но поднялась снова",
              title: "Если у вас стойкая температура более 24 часов, рекомендуем вызвать скорую помощь\n\nДлительная высокая температура может отрицательно влиять на организм",
            }],
          }],
        }],
      }, {
        buttonName: "Более 24 часов", title: "Выберите значение вашей температуры", buttons: [{
          buttonName: "38-39", title: "Принимали ли вы препараты? ", buttons: [{
            buttonName: "Не принимал",
            title: "В вашей ситуации следует принять парацетамол 500 мг, тщательно запить водой\n\nПринимайте достаточное количество жидкости это поможет снизить температуру",
          }, {
            buttonName: "Да, принимал", title: "Какой результат был?", buttons: [{
              buttonName: "Результата нет",
              title: "Если у вас стойкая температура более 24 часов, рекомендуем вызвать скорую помощь\n\nДлительная высокая температура может отрицательно влиять на организм",
            }, {
              buttonName: "Температура упала, но поднялась снова",
              title: "Если у вас стойкая температура более 24 часов, рекомендуем вызвать скорую помощь\n\nДлительная высокая температура может отрицательно влиять на организм",
            }],
          }],
        }, {
          buttonName: "39-41", title: "Принимали ли вы препараты? ", buttons: [{
            buttonName: "Не принимал",
            title: "В вашей ситуации следует принять парацетамол 500 мг, тщательно запить водой\n\nПринимайте достаточное количество жидкости это поможет снизить температуру",
          }, {
            buttonName: "Да, принимал", title: "Какой результат был?", buttons: [{
              buttonName: "Результата нет",
              title: "В вашей ситуации следует принять парацетамол 500 мг, тщательно запить водой\n\nПринимайте достаточное количество жидкости, это поможет снизить температуру",
            }, {
              buttonName: "Температура упала, но поднялась снова",
              title: "Если у вас стойкая температура более 24 часов, рекомендуем вызвать скорую помощь\n\nДлительная высокая температура может отрицательно влиять на организм",
            }],
          }],
        }],
      }],
    }, {
      buttonName: "Боль в горле",
      title: "Оцените боль от 1 до 10, где 1 - небольшое першение, 10 - невозможность говорить",
      buttons: [{
        buttonName: "1-4", title: "Как долго сохраняются симптомы?", buttons: [{
          buttonName: "1 день", title: "Оцените, Вам становится легче, если с утра выпиваете кружку чая?", buttons: [{
            buttonName: "Да",
            title: "В вашей ситуации рекомендуем принять леденцы для рассасывания - Стрепсил\n\nПрименять их можно каждые 2-4 часа, не более 8 таблеток в сутки",
          }, {
            buttonName: "Нет", title: "Для эффективной помощи Вам следует обратиться к ЛОРу",
          }],
        }, {
          buttonName: "2-3 дня", title: "Оцените, Вам становится легче, если с утра выпиваете кружку чая?", buttons: [{
            buttonName: "Да",
            title: "В вашей ситуации рекомендуем Вам спрей для горла Тантум Верде Форте. Эффективно поможет справиться с болью в горле и поможет снять воспаление. Сделайте несколько распылений и не сглатывайте слюни в течении 1 минуты\n\nLля комплексного лечения советуем пить больше жидкости и полоскать горло раствором фурацилина 2-4 раза в день",
          }, {
            buttonName: "Нет", title: "Для эффективной помощи Вам следует обратиться к ЛОРу",
          }],
        }, {
          buttonName: "4-7 дней", title: "Оцените, Вам становится легче, если с утра выпиваете кружку чая?", buttons: [{
            buttonName: "Да",
            title: "В вашей ситуации рекомендуем Вам спрей для горла Тантум Верде Форте. Эффективно поможет справиться с болью в горле и поможет снять воспаление. Сделайте несколько распылений и не сглатывайте слюни в течении 1 минуты\n\nLля комплексного лечения советуем пить больше жидкости и полоскать горло раствором фурацилина 2-4 раза в день",
          }, {
            buttonName: "Нет", title: "Для эффективной помощи Вам следует обратиться к ЛОРу",
          }],
        }],
      }, {
        buttonName: "4-7", title: "Как долго сохраняются симптомы?", buttons: [{
          buttonName: "1 день", title: "Оцените, Вам становится легче, если с утра выпиваете кружку чая?", buttons: [{
            buttonName: "Да",
            title: "В вашей ситуации рекомендуем принять леденцы для рассасывания - Стрепсил\n\nПрименять их можно каждые 2-4 часа, не более 8 таблеток в сутки",
          }, {
            buttonName: "Нет", title: "Для эффективной помощи Вам следует обратиться к ЛОРу",
          }],
        }, {
          buttonName: "2-3 дня", title: "Оцените, Вам становится легче, если с утра выпиваете кружку чая?", buttons: [{
            buttonName: "Да",
            title: "В вашей ситуации рекомендуем Вам спрей для горла Тантум Верде Форте. Эффективно поможет справиться с болью в горле и поможет снять воспаление. Сделайте несколько распылений и не сглатывайте слюни в течении 1 минуты\n\nLля комплексного лечения советуем пить больше жидкости и полоскать горло раствором фурацилина 2-4 раза в день",
          }, {
            buttonName: "Нет", title: "Для эффективной помощи Вам следует обратиться к ЛОРу",
          }],
        }, {
          buttonName: "4-7 дней", title: "Оцените, Вам становится легче, если с утра выпиваете кружку чая?", buttons: [{
            buttonName: "Да",
            title: "В вашей ситуации рекомендуем Вам спрей для горла Тантум Верде Форте. Эффективно поможет справиться с болью в горле и поможет снять воспаление. Сделайте несколько распылений и не сглатывайте слюни в течении 1 минуты\n\nLля комплексного лечения советуем пить больше жидкости и полоскать горло раствором фурацилина 2-4 раза в день",
          }, {
            buttonName: "Нет", title: "Для эффективной помощи Вам следует обратиться к ЛОРу",
          }],
        }],
      }, {
        buttonName: "7-10", title: "Как долго сохраняются симптомы?", buttons: [{
          buttonName: "1 день", title: "Оцените, Вам становится легче, если с утра выпиваете кружку чая?", buttons: [{
            buttonName: "Да",
            title: "В вашей ситуации рекомендуем принять леденцы для рассасывания - Стрепсил\n\nПрименять их можно каждые 2-4 часа, не более 8 таблеток в сутки",
          }, {
            buttonName: "Нет", title: "Для эффективной помощи Вам следует обратиться к ЛОРу",
          }],
        }, {
          buttonName: "2-3 дня", title: "Оцените, Вам становится легче, если с утра выпиваете кружку чая?", buttons: [{
            buttonName: "Да",
            title: "В вашей ситуации рекомендуем Вам спрей для горла Тантум Верде Форте. Эффективно поможет справиться с болью в горле и поможет снять воспаление. Сделайте несколько распылений и не сглатывайте слюни в течении 1 минуты\n\nLля комплексного лечения советуем пить больше жидкости и полоскать горло раствором фурацилина 2-4 раза в день",
          }, {
            buttonName: "Нет", title: "Для эффективной помощи Вам следует обратиться к ЛОРу",
          }],
        }, {
          buttonName: "4-7 дней", title: "Оцените, Вам становится легче, если с утра выпиваете кружку чая?", buttons: [{
            buttonName: "Да",
            title: "В вашей ситуации рекомендуем Вам спрей для горла Тантум Верде Форте. Эффективно поможет справиться с болью в горле и поможет снять воспаление. Сделайте несколько распылений и не сглатывайте слюни в течении 1 минуты\n\nLля комплексного лечения советуем пить больше жидкости и полоскать горло раствором фурацилина 2-4 раза в день",
          }, {
            buttonName: "Нет", title: "Для эффективной помощи Вам следует обратиться к ЛОРу",
          }],
        }],
      }],
    }, {
      buttonName: "Боль в суставах", title: "...", buttons: [],
    }, {
      buttonName: "Боль в мышцах", title: "...", buttons: [],
    }, {
      buttonName: "Боль в сердце", title: "...", buttons: [],
    }, {
      buttonName: "Заложенность носа", title: "...", buttons: [],
    }, {
      buttonName: "Насморк", title: "...", buttons: [],
    }],
  };

  const [Data, setData] = useState(route?.params?.data ? route?.params.data : data);


  const ButtonBlue = ({ text, press }) => {
    return (<TouchableOpacity onPress={press}
                              style={{
                                width: "100%",
                                marginVertical: 10,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#CBE3FB",
                                height: 50,
                                borderRadius: 20,
                              }}>
      <Text style={{ fontWeight: "bold", fontSize: 16, color: "#000" }}>{text}</Text>
    </TouchableOpacity>);
  };

  const Menu = ({ data }) => {
    return (<View style={{
      justifyContent: "center", alignItems: "center", height: "100%", width: "90%", marginHorizontal: "5%",
    }}>

      {data?.title && <Text style={{
        marginBottom: 40, fontSize: 24, fontWeight: "900", color: "#7DD65A", textAlign: "center",
      }}>{data.title}</Text>}
      {data?.text && <Text style={{ fontSize: 16 }}>{data.text}</Text>}
      {data?.buttons && data.buttons.map((item, index) => (<ButtonBlue key={index} text={item.buttonName} press={() => {
        navigation.navigate("Start" + (route?.params?.id ? route?.params?.id : 1), {
          data: data.buttons[index], id: route?.params?.id ? route?.params?.id + 1 : 2,
        });
      }} />))}

    </View>);
  };

  return (<SafeAreaView style={{ ...backgroundStyle, height: "100%" }}>
    <StatusBar
      barStyle={/*isDarkMode ? "light-content" :*/ "dark-content"}
      backgroundColor={backgroundStyle.backgroundColor}
    />
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>

      <View style={{ minHeight: Platform.OS === "android" ? Dimensions.get("window").height : "100%" }}>
        <Menu data={Data} />
      </View>

    </ScrollView>
  </SafeAreaView>);
}
