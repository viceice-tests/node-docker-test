$ErrorActionPreference= 'Stop'


$n = get-command node

Copy-Item $n.Source -Destination ./node.exe
Copy-Item "C:\Windows\System32\vcruntime140.dll" ./

./node --version
if ($LASTEXITCODE -ne 0)
{
    exit $LASTEXITCODE
}

npm ci
if ($LASTEXITCODE -ne 0)
{
    exit $LASTEXITCODE
}