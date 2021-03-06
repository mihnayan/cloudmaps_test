## Резюме о проделанной работе

### Общие сведения

Работа начата 25 марта 2019 года с установки и настройки окружения.

Среднее ежедневное время, затрачиваемое на работу - 1 час 20 минут.


### Выполнение функциональных требований

#### 25.03.2019

* Установка и настройка окруженияя. Коммит [93f3bba](https://github.com/mihnayan/cloudmaps_test/commit/93f3bbaea9add26de2df105ccf7109a7cf75ac89)

* **Пункт №1 требований:** На главной странице указаны имя и фамилия разработчика. Коммит [7e99cde](https://github.com/mihnayan/cloudmaps_test/commit/7e99cde45f26b658fd58a1a2a77d1ba0519a61da)

#### 26.03.2019

* Создан сервис `EmailService`, в который выделен метод отправки письма об активации пользователя. Коммит [09ba650](https://github.com/mihnayan/cloudmaps_test/commit/09ba650e8bc13e170e238406d6d17446857758a5)

#### 27-28.03.2019

* **Пункт №2 требований:** Реализована возможность входа на сервис только пользователям с подтверждённой учётной записью. В случае, если учётная запись не активирована, то предлагается отослать повторное письмо об активации.

Коммит [5aa7f690](https://github.com/mihnayan/cloudmaps_test/commit/5aa7f690e24cb9f6bac1fb5b39db3b8c7c8e5312)

#### 29.03.2019

* Исправлены ошибка загрузки файла аватара на клиенте: файл не грузился не выводя ни каких сообщений об ошибке. Причина: ошибка указани перечня расширений файла - пробела быть не должно. Добавлено логгирование в консоль при возникновении ошибки во время загрузки файла.

* Исправлена ошибка сохранения файла аватара на диске в серверной части: неверное свойство, содержащее путь к директории приложения; в загрузчик файлов добавлен параметр инициализации с указанием пути, в который будет сохраняться файл.

* Добавлено игнорирование файлов аватаров при добавлении в git, кроме аватара по умолчанию.

Коммит [55c8edd](https://github.com/mihnayan/cloudmaps_test/commit/55c8eddc42dbaf05db08db0a8e84266033eb13f6)

* **Пункт №3 требований:** Реализовано обрезание картинки аватара при загрузке на сервер

Коммит [9b5aba2](https://github.com/mihnayan/cloudmaps_test/commit/9b5aba270ec55f03363d448d46069e0567d6a0d3)

* **Пункт №4 требований:** Добавлен свой favicon вместо стандартного на сайте. Примечание: favicon самостоятельно не изготавливался, а скачан с ресурса https://icons8.com/icon/pack/baby/wired. Коммит [1bfb638](https://github.com/mihnayan/cloudmaps_test/commit/1bfb638983c826dba3919832bdd592947aedae8d)


#### 09.04.2019

* **Пункт №5 требований:** Добавлена информация о том, кто из пользователей в данный момент online в списке друзей, запросов в друзья и списке пользователей при поиске новых друзей. Реализовано изменение статуса пользователя без необходимости перегружать страницу в браузере. Коммит [159bd14](https://github.com/mihnayan/cloudmaps_test/commit/159bd143f494f5d047f8ca87357b55cd3721fa82)


### Не функциональные требования

1. При написании нового кода на JS старался придерживаться стиля ES6 (ES-2015): объявление переменных с помощью `let` и `const`, стрелочные функции, промисы.
