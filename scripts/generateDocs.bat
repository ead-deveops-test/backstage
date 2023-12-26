@echo off

set "venv_path=E:\env"
set "catalogName=%1"
set "svnUsername=%2"
set "svnPassword=%3"
set "svnHost=%4"
set "svnDirectory=%5"

if exist "%venv_path%\Scripts\activate" (
    call "%venv_path%\Scripts\activate"
    echo Python virtual environment activated.
) else (
    echo Virtual environment not found at %venv_path%.
)

svn checkout --username "%svnUsername%" --password "%svnPassword%" "%svnHost%" "%svnDirectory%"

techdocs-cli generate --no-docker  --source-dir "E:\Subversion\%catalogName%" --output-dir "E:\techdocs\default\component\%catalogName%"