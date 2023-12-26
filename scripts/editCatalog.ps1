param (
    [string]$newName,
    [string]$jsonFilePath,
    [string]$moduleName,
    [string]$modality,
    [string]$bodyParts,
    [string]$processingPurpose,
    [string]$protocol,
    [string]$algorithmType,
    [string]$packageType,
    [string]$supportedOs,
    [string]$developmentStatus,
    [string]$linkToProjectPage
)
$jsonContent = Get-Content -Raw -Path $jsonFilePath | ConvertFrom-Json

$jsonContent.spec.projectName = $newName
$jsonContent.spec.moduleName = $moduleName
$jsonContent.spec.modality = $modality
$jsonContent.spec.bodyParts = $bodyParts
$jsonContent.spec.processingPurpose = $processingPurpose
$jsonContent.spec.protocol = $protocol
$jsonContent.spec.algorithmType = $algorithmType
$jsonContent.spec.packageType = $packageType
$jsonContent.spec.supportedOs = $supportedOs
$jsonContent.spec.sourceCodeLanguage = $sourceCodeLanguage
$jsonContent.spec.developmentStatus = $developmentStatus
$jsonContent.spec.linkToProjectPage = $linkToProjectPage


$jsonContent.metadata.name = $newName
$jsonContent.metadata.annotations.'backstage.io/managed-by-location' = "url:http://18.181.180.137/svn/Test/"+$newName
$jsonContent.metadata.annotations.'backstage.io/managed-by-origin-location' = "url:http://18.181.180.137/svn/Test/"+$newName
$jsonContent.metadata.annotations.'backstage.io/source-location' = "url:http://18.181.180.137/svn/Test/"+$newName


$updatedJson = $jsonContent | ConvertTo-Json -Depth 10

$updatedJson | Set-Content -Path $jsonFilePath