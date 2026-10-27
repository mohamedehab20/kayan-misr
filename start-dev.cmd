@echo off
chcp 65001 >nul
title Kayan Misr - dev server (http://localhost:3010)
cd /d "%~dp0"
echo Starting Kayan Misr on http://localhost:3010/ar
start "" http://localhost:3010/ar
call npm run dev -- -p 3010
echo.
echo Server stopped. Press any key to close this window.
pause >nul
