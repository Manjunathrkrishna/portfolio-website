#!/usr/bin/env python3
"""Generate SSH key for GitHub authentication"""

import os
import subprocess
from pathlib import Path

ssh_dir = Path.home() / ".ssh"
ssh_key = ssh_dir / "id_ed25519"

# Create .ssh directory if it doesn't exist
ssh_dir.mkdir(exist_ok=True)
(ssh_dir / "config").touch(exist_ok=True)

# Generate SSH key
cmd = [
    "ssh-keygen",
    "-t", "ed25519",
    "-f", str(ssh_key),
    "-N", "",
    "-C", "manjunathrkrishna@github.com"
]

try:
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode == 0:
        print(f"✅ SSH key generated successfully at {ssh_key}")
        print(f"\n📋 Public key content:")
        with open(str(ssh_key) + ".pub", "r") as f:
            print(f.read())
        print("\n📌 Next steps:")
        print("1. Copy the public key above")
        print("2. Go to https://github.com/settings/keys")
        print("3. Click 'New SSH key'")
        print("4. Paste the key and save")
    else:
        print(f"Error: {result.stderr}")
except Exception as e:
    print(f"Error generating SSH key: {e}")
