#!/bin/sh
BASE_DIR=$(dirname "$0")

# Determine latest version
GITHUB_BASE_URL="https://github.com/StackExchange/dnscontrol/releases"
# LATEST_RELEASE=$(curl -L -s -H 'Accept: application/json' $GITHUB_BASE_URL/latest)
# LATEST_VERSION=$(echo $LATEST_RELEASE | sed -e 's/.*"tag_name":"\([^"]*\)".*/\1/')
LATEST_VERSION="v3.31.4"
ARTIFACT_BASE_URL="$GITHUB_BASE_URL/download/$LATEST_VERSION"

# Download executables
if [ ! -f "$BASE_DIR/dnscontrol-Darwin" ]; then
wget -O $BASE_DIR/dnscontrol-Darwin $ARTIFACT_BASE_URL/dnscontrol-Darwin
fi

if [ ! -f "$BASE_DIR/dnscontrol-Linux" ]; then
wget -O $BASE_DIR/dnscontrol-Linux $ARTIFACT_BASE_URL/dnscontrol-Linux
fi

if [ ! -f "$BASE_DIR/dnscontrol.exe" ]; then
wget -O $BASE_DIR/dnscontrol.exe $ARTIFACT_BASE_URL/dnscontrol.exe
fi

chmod +x $BASE_DIR/dnscontrol*

# Print out latest version
echo $LATEST_VERSION > $BASE_DIR/dnscontrol-VERSION