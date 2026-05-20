@echo off
echo Parando o servidor...
taskkill /F /IM node.exe 2>nul
timeout /t 2
echo.
echo Iniciando servidor...
npm start
