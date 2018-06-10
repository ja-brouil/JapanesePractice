If npm start won't start:
$ npm install -g npm@latest  # or, npm install -g npm@latest --prefix "C:\Program Files\nodejs"
$ rm -rf node_modules        # or, `cmd /c rmdir /s /q node_modules` on Windows
$ npm install

