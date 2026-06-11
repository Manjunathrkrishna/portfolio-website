#!/usr/bin/env python3
"""Add GitHub SSH host key to known_hosts"""

import subprocess
from pathlib import Path

ssh_dir = Path.home() / ".ssh"
known_hosts = ssh_dir / "known_hosts"

# Run ssh-keyscan for github.com
result = subprocess.run(
    ["ssh-keyscan", "github.com"],
    capture_output=True,
    text=True
)

if result.returncode == 0:
    # Append to known_hosts
    with open(known_hosts, "a") as f:
        f.write(result.stdout)
    print("✅ GitHub SSH host key added to known_hosts")
else:
    print(f"Error: {result.stderr}")
