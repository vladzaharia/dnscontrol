#!/bin/sh
BASE_DIR=$(dirname "$0")
DL_DIR="$BASE_DIR/dl"

# Determine latest version
GITHUB_BASE_URL="https://github.com/StackExchange/dnscontrol/releases"
RELEASE=$(curl -L -s -H 'Accept: application/json' $GITHUB_BASE_URL/latest)
VERSION=$(echo $RELEASE | sed -e 's/.*"tag_name":"v\([^"]*\)".*/\1/')
ARTIFACT_BASE_URL="$GITHUB_BASE_URL/download/v$VERSION"

# Download executables
if [ ! -f "$BASE_DIR/dnscontrol-Darwin" ]; then
  mkdir -p $DL_DIR
  wget -O $DL_DIR/dnscontrol_$VERSION\_darwin_all.tar.gz $ARTIFACT_BASE_URL/dnscontrol_$VERSION\_darwin_all.tar.gz
  tar -xvf $DL_DIR/dnscontrol_$VERSION\_darwin_all.tar.gz -C $DL_DIR
  mv $DL_DIR/dnscontrol $BASE_DIR/dnscontrol-Darwin
  rm -rf $DL_DIR
fi

if [ ! -f "$BASE_DIR/dnscontrol-Linux" ]; then
wget -O $BASE_DIR/dnscontrol-Linux $ARTIFACT_BASE_URL/dnscontrol-Linux
  mkdir -p $DL_DIR
  wget -O $DL_DIR/dnscontrol_$VERSION\_linux_amd64.tar.gz $ARTIFACT_BASE_URL/dnscontrol_$VERSION\_linux_amd64.tar.gz
  tar -xvf $DL_DIR/dnscontrol_$VERSION\_linux_amd64.tar.gz -C $DL_DIR
  mv $DL_DIR/dnscontrol $BASE_DIR/dnscontrol-Linux
  rm -rf $DL_DIR
fi

chmod +x $BASE_DIR/dnscontrol*

# Print out latest version
echo $VERSION > $BASE_DIR/dnscontrol-VERSION