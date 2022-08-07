$baseUrl="https://github.com/StackExchange/dnscontrol/releases"

# Extract out latest version
$latestRelease = Invoke-WebRequest "$baseUrl/latest" -Headers @{"Accept"="application/json"}
$json = $latestRelease.Content | ConvertFrom-Json
$latestVersion = $json.tag_name

# Download latest binaries
Invoke-WebRequest -Uri "$baseUrl/download/$latestVersion/dnscontrol-Darwin" -OutFile .\dnscontrol-Darwin
Invoke-WebRequest -Uri "$baseUrl/download/$latestVersion/dnscontrol-Linux" -OutFile .\dnscontrol-Linux
Invoke-WebRequest -Uri "$baseUrl/download/$latestVersion/dnscontrol.exe" -OutFile .\dnscontrol.exe

# Output latest version to file
$latestVersion | Out-File .\VERSION
