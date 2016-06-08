# Инструкции для Максима:

- Поставить [node.js](https://nodejs.org/en/)
---
- Скачать архив:
    ```sh
    $ cd Documents/my_project
    $ git clone https://Kost9in@bitbucket.org/Kost9in/gulp.git
    ```
- или [скачать тут](https://bitbucket.org/Kost9in/gulp/get/master.zip)
---
- Перейти в папку проекта и выполнить установку зависимостей:
    ```sh
    $ cd Documents/my_project/gulp
    $ npm i
    ```
---
- Установить gulp глобально(только один раз):
    ```sh
    $ sudo npm i gulp -g
    ```
---
- Запустить gulp:
    - без минификации:
        ```sh
        $ npm run dev
        ```
    - с минификацией:
        ```sh
        $ npm run prod
        ```
---
*В src складываешь свой хлам, в build получаешь. При редактировании файлов в src они будут автоматически генерироваться в build. Less будет ложиться в папку css, подключай из нее.*

*Для выхода из watch-режима в консоли: ctrl + C*
