$ErrorActionPreference= 'Stop'


$n = get-command node

Copy-Item $n.Source -Destination ./node.exe

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