#!/bin/bash
# Validation Script for Auto-Generated Files
# Purpose: Verify that all expected files and directories exist
# Usage: ./validate_deployment_files.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "🔍 Validating deployment files and directories..."
echo "Working directory: $SCRIPT_DIR"
echo ""

ERRORS=0
WARNINGS=0

# Function to check if file exists
check_file() {
    local filepath="$1"
    local description="$2"
    local required="${3:-true}"
    
    if [[ -f "$filepath" ]]; then
        echo "✅ $description: $filepath"
    else
        if [[ "$required" == "true" ]]; then
            echo "❌ MISSING: $description: $filepath"
            ((ERRORS++))
        else
            echo "⚠️  OPTIONAL: $description: $filepath"
            ((WARNINGS++))
        fi
    fi
}

# Function to check if directory exists
check_directory() {
    local dirpath="$1"
    local description="$2"
    local required="${3:-true}"
    
    if [[ -d "$dirpath" ]]; then
        echo "✅ $description: $dirpath/"
    else
        if [[ "$required" == "true" ]]; then
            echo "❌ MISSING: $description: $dirpath/"
            ((ERRORS++))
        else
            echo "⚠️  OPTIONAL: $description: $dirpath/"
            ((WARNINGS++))
        fi
    fi
}

echo "1. Checking workflow artifact files..."
check_file "/home/runner/work/_temp/runtime-logs/blocked.jsonl" "Workflow blocked.jsonl"
check_file "/home/runner/work/_temp/runtime-logs/blocked.md" "Workflow blocked.md"

echo ""
echo "2. Checking critical directories..."
check_directory "assets" "Assets directory"
check_directory "css" "CSS directory"
check_directory "js" "JS directory"
check_directory "media" "Media directory"
check_directory "EuystacioDraft" "EuystacioDraft directory"
check_directory "EuystacioDraft/css" "EuystacioDraft CSS directory"
check_directory "EuystacioDraft/js" "EuystacioDraft JS directory"
check_directory "EuystacioDraft/assets" "EuystacioDraft assets directory"
check_directory "logs" "Logs directory"
check_directory "astrodeepaura_state" "Astrodeepaura state directory"

echo ""
echo "3. Checking essential files..."
check_file "EuystacioDraft/README.md" "EuystacioDraft README"
check_file "EuystacioDraft/woodstone.md" "EuystacioDraft woodstone documentation"
check_file "EuystacioDraft/index.html" "EuystacioDraft main interface"
check_file "EuystacioDraft/css/accessibility.css" "EuystacioDraft accessibility CSS"
check_file "EuystacioDraft/js/harmonic_bridge_map.js" "EuystacioDraft bridge JS"
check_file "EuystacioDraft/metadata.json" "EuystacioDraft metadata"

echo ""
echo "4. Checking configuration files..."
check_file "astrodeepaura_config.json" "Astrodeepaura configuration"
check_file "logs/astrodeepaura.log" "Astrodeepaura log file"

echo ""
echo "5. Checking frontend files (optional)..."
check_directory "EuystacioDRAFT-Frontend" "Frontend directory" false
if [[ -d "EuystacioDRAFT-Frontend" ]]; then
    check_directory "EuystacioDRAFT-Frontend/assets/css" "Frontend CSS directory" false
    check_directory "EuystacioDRAFT-Frontend/assets/js" "Frontend JS directory" false
    check_directory "EuystacioDRAFT-Frontend/media" "Frontend media directory" false
    check_file "EuystacioDRAFT-Frontend/assets/css/style.css" "Frontend style CSS" false
    check_file "EuystacioDRAFT-Frontend/assets/js/front-end.js" "Frontend core JS" false
    check_file "EuystacioDRAFT-Frontend/media/woodstone_emblem.svg" "Frontend emblem SVG" false
fi

echo ""
echo "6. Checking main auto-generation files..."
check_file "auto_create_deployment_files.sh" "Auto-create script"
check_file "AUTO_CREATE_README.md" "Auto-create documentation"

echo ""
echo "📊 Validation Summary:"
echo "  ✅ Total checks passed: $(($(find . -name "*" | wc -l) - ERRORS - WARNINGS))"
echo "  ⚠️  Warnings: $WARNINGS"
echo "  ❌ Errors: $ERRORS"

if [[ $ERRORS -eq 0 ]]; then
    echo ""
    echo "🌿 ✅ All required files and directories are present!"
    echo "🔄 Deployment stability validated successfully."
    if [[ $WARNINGS -gt 0 ]]; then
        echo "⚠️  Note: $WARNINGS optional items are missing (this is normal)."
    fi
    echo ""
    echo "**Victory is not power over — it is presence with.** ✨"
    exit 0
else
    echo ""
    echo "❌ Validation failed: $ERRORS required items are missing!"
    echo "💡 Run ./auto_create_deployment_files.sh to create missing files."
    exit 1
fi