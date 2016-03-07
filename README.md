# Тестовое задание ООО "Муниципальные решения"
## Основные положения
В качестве тестового задания предлагается реализация ТЗ на доработку приложения начального уровня разработки, реализующего функционал некой геоинформационной социальной сети.

Что проверяется:
- Умение разбираться в чужом коде
- Умение в разумные сроки разбираться в новых технологиях и компонентах
- Качество и понятность кода
- Время реализации поставленной задачи

Используемые технологии и компоненты:
- Базовая платформа: [node.js](https://nodejs.org)
- Фреймворк [sails.js](http://sailsjs.org)
- СУБД [PostgreSQL](http://www.postgresql.org)
- Базовые стили и компоненты: [Bootstrap](http://getbootstrap.com)
- [iQuery](https://jquery.com)
- Загрузка файлов: [plupload](http://www.plupload.com)
- Работа с картами: [Leaflet](http://leafletjs.com)
- web-шаблоны: [Jade](http://jade-lang.com)
- Полезные функции для использования на стороне сервера: [Lodash](https://lodash.com)

## Создание рабочего окружения
1. Установить последнюю стабильную версию [node.js](https://nodejs.org) (Если Вы работаете в Linux, то лучше устанавливать из исходников)
2. Установить глобально [sails.js](http://sailsjs.org)
3. Установить [git](https://git-scm.com)
4. Клонировать [этот репозиторий](https://github.com/alexd1971/cloudmaps_test)
5. Установить локально СУБД [PostgreSQL](http://www.postgresql.org)
6. Создать в СУБД пользователя test с паролем test
7. Создать БД test с владельцем test
8. Создать структуру БД test с использованием прилагаемого дампа test.backup (см. корневой каталог проекта)
9. Перейти в каталог проекта.
10. Установить зависимые node.js- и sails.js-модули с помощью команды: 
  
    $ npm install

11. Запустить приложение с помощью команды:  
  
    $ sails lift

12. Приложение доступно по URL: [http://localhost:1337](http://localhost:1337)

## Техническое задание на разработку
### Функциональные требования
1. На гланой странице указать имя и фамилию разработчика
2. Исправить ошибку. Авторизация нового пользователя происходит независимо от того подтвержден email пользователя или нет. Если пользователь не аткивирован (не подтвержден его email), то система не должна его пускать, выводя соответствующее сообщение и ссылку для отправки повторного email со ссылкой активации)
3. Создать и добавить к проекту favicon.
4. Добавить информацию о том, кто из пользователей в данный момент online в списке друзей, запросов в друзья и списке пользователей при поиске новых друзей. Постараться реализовать изменение статуса пользователя без необходимости перегружать страницу в браузере. Сейчас так реализована отправка запроса в друзья, подтверждение и отклонение запроса в друзья. (*Подсказка. Использовать [предоставляемые sails.js средства работы с web-сокетами](http://sailsjs.org/documentation/reference/web-sockets)*)
5. Изменить url профиля пользователя с user/<id> на user/<username>
6. Реализовать просмотр профилей друзей из списка. При попытке просмотреть профиль пользователя, не являющегося другом, путем явного указания url его профиля, необходимо выводить сообщение о невозможности просмотра данной информации.
