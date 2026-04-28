@echo off
echo ===================================================
echo   SIMOOLA - Setup e Inicializacao do Projeto
echo ===================================================
echo.

:: Verificar se o Node.js está instalado
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRO] Node.js nao encontrado. Por favor, instale o Node.js antes de continuar.
    echo Baixe em: https://nodejs.org/
    pause
    exit /b
)

echo [1/3] Instalando dependencias (npm install)...
call npm install

if %errorlevel% neq 0 (
    echo [ERRO] Falha ao instalar dependencias.
    pause
    exit /b
)

echo.
echo [2/3] Build de verificacao (opcional)...
echo Pulando build para acelerar o desenvolvimento local.
echo.

echo [3/3] Iniciando o servidor de desenvolvimento...
echo O sistema abrira em http://localhost:3000
echo.
npm run dev
