@echo off


SET "directoryPath=%1"  
SET "svnHost=%2"
SET "username=%3"
SET "password=%4"
SET "repoName=%5"
SET "subRepoName=%6"
SET "commitMessage=%7"
SET "moduleName=%8"
SET "modality=%9"
SHIFT
SHIFT
SHIFT
SHIFT
SHIFT
SHIFT
SHIFT
SHIFT
SET "bodyParts=%1"
SET "processingPurpose=%2"
SET "protocol=%3"
SET "algorithmType=%4"
SET "packageType=%5"
SET "supportedOs=%6"
SET "developmentStatus=%7"
SET "linkToProjectPage=%8"

@REM SET "directoryPath=C:\Users\quest\Desktop\Subversion"
@REM SET "svnHost=http://18.181.180.137/svn/Test/"
@REM SET "username=user"
@REM SET "password=user"
@REM SET "repoName=Test"
@REM SET "subRepoName=Catalog-18"
@REM SET "commitMessage=Initial Commit"

echo %directoryPath%
echo %svnHost%
echo %username%
echo %password%
echo %repoName%
echo %subRepoName%
echo %commitMessage%


IF not exist "%directoryPath%" (
  mkdir "%directoryPath%"
)
svn "info" "--username" "%username%" "--password" "%password%" "%svnHost%"
cd "%directoryPath%"
cd
echo "SVN CHECKOUT"
svn "checkout" "--username" "%username%" "--password" "%password%" "%svnHost%" "%directoryPath%"
IF not exist "%directoryPath%\%subRepoName%" (
  mkdir "%directoryPath%\%subRepoName%"
)
XCOPY  "D:\backstage-catalog-customization\examples\subversion\content" "%directoryPath%\%subRepoName%/" /E /I

powershell.exe -File D:\backstage-catalog-customization\scripts\editCatalog.ps1 -newName "%subRepoName%" -jsonFilePath "%directoryPath%\%subRepoName%\catalog-info.json" -moduleName "%moduleName%" -modality "%modality%" -bodyParts "%bodyParts%" -processingPurpose "%processingPurpose%" -protocol "%protocol%" -algorithmType "%algorithmType%"  -packageType "%packageType%" -supportedOs "%supportedOs%" -developmentStatus "%developmentStatus%" -linkToProjectPage "%linkToProjectPage%"
                                                                                                                                

setlocal enabledelayedexpansion
set "filename=%directoryPath%\%subRepoName%\mkdocs.yml"
set "sitename_old=sitename"
set "sitename_new=%subRepoName%"
(for /f "tokens=*" %%a in (%filename%) do (
    set "line=%%a"
    set "line=!line:%sitename_old%=%sitename_new%!"
    echo !line!
)) > temp.yml
move /y temp.yml %filename%
echo Sitename updated to %sitename_new%.

echo "SVN ADD"
svn "add" "%directoryPath%\%subRepoName%"
cd
cd "%directoryPath%"
cd
echo "SVN COMMIT"
svn "commit" "-m" "%commitMessage%" "--password" "%password%" "%directoryPath%"