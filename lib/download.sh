#!/bin/sh
# Determine latest version
GITHUB_BASE_URL="https://github.com/StackExchange/dnscontrol/releases"
LATEST_RELEASE=$(curl -L -s -H 'Accept: application/json' $GITHUB_BASE_URL/latest)
LATEST_VERSION=$(echo $LATEST_RELEASE | sed -e 's/.*"tag_name":"\([^"]*\)".*/\1/')
ARTIFACT_BASE_URL="$GITHUB_BASE_URL/download/$LATEST_VERSION"

# Download executables
wget -O dnscontrol-Darwin $ARTIFACT_BASE_URL/dnscontrol-Darwin
wget -O dnscontrol-Linux $ARTIFACT_BASE_URL/dnscontrol-Linux
wget -O dnscontrol.exe $ARTIFACT_BASE_URL/dnscontrol.exe

# Print out latest version
echo $LATEST_VERSION > ./VERSION