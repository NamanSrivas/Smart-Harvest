# Quick fix script for react-scripts issue
Write-Host "Fixing react-scripts issue..." -ForegroundColor Green

# Fix the package.json
$packageJsonPath = "package.json"
$packageJson = Get-Content $packageJsonPath -Raw | ConvertFrom-Json

# Fix react-scripts version if it's invalid
if ($packageJson.dependencies.'react-scripts' -eq "^0.0.0") {
    Write-Host "Found invalid react-scripts version. Fixing..." -ForegroundColor Yellow
    $packageJson.dependencies.'react-scripts' = "^5.0.1"
    $packageJson | ConvertTo-Json -Depth 10 | Set-Content $packageJsonPath
    Write-Host "Fixed package.json" -ForegroundColor Green
}

# Clean and reinstall
Write-Host "Cleaning cache..." -ForegroundColor Yellow
npm cache clean --force

Write-Host "Removing node_modules..." -ForegroundColor Yellow
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue

Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

Write-Host "React-scripts issue fixed! You can now run 'npm start'" -ForegroundColor Green
