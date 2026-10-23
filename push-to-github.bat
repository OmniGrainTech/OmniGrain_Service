@echo off
title Push Omnigrain Tech LLP to GitHub
echo ========================================================
echo   Pushing Omnigrain Tech LLP to GitHub
echo   Repository: https://github.com/OmniGrainTech/OmniGrain_Service.git
echo   Branch: main
echo ========================================================
echo.
git push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo ========================================================
    echo   SUCCESS! All files and folders pushed to GitHub.
    echo ========================================================
) else (
    echo ========================================================
    echo   Push failed or requires login.
    echo ========================================================
)
echo.
pause
