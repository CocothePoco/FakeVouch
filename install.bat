@echo off
title Cocoa Market Bot Setup
color 0A

:: Fancy ASCII Art
echo.
echo  _____ _____ _____ _____ _____    _____ _____ _____ _____
echo |     |  |  |   | |   __|  |  |  |  |  |   __|   __|   __|
echo |  |  |  |  | | | |   __|     |  |  |  |   __|   __|__   |
echo |_____|_____|_|___|_____|__|__|  \___/|_____|_____|_____|
echo.

:: Install Node.js dependencies
echo Installing Node.js dependencies...
npm install

:: Check if the installation was successful
if %errorlevel% neq 0 (
    echo.
    echo Installation failed! Please check the error messages above.
    pause
    exit /b %errorlevel%
)

:: Run the script
echo.
echo Starting the Cocoa Market Bot...
node index.js

:: Check if the script ran successfully
if %errorlevel% neq 0 (
    echo.
    echo The bot encountered an error! Please check the error messages above.
    pause
    exit /b %errorlevel%
)

echo.
echo Cocoa Market Bot is now running!
pause