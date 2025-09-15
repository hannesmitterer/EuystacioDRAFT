# Deployment Stability System - Usage Guide

## Quick Start

### Auto-Generate Missing Files
```bash
# Make scripts executable (first time only)
chmod +x auto_create_deployment_files.sh validate_deployment_files.sh

# Run auto-generation
./auto_create_deployment_files.sh
```

### Validate All Files Exist
```bash
# Validate current state
./validate_deployment_files.sh
```

## Integration with CI/CD

Add to your GitHub Actions workflow:

```yaml
- name: Ensure deployment stability
  run: |
    chmod +x auto_create_deployment_files.sh
    ./auto_create_deployment_files.sh
    
- name: Validate deployment files
  run: |
    chmod +x validate_deployment_files.sh
    ./validate_deployment_files.sh
```

## Key Features

- ✅ **Safe to run repeatedly** - Never overwrites existing files
- ✅ **Workflow artifact protection** - Creates placeholder files for CI/CD
- ✅ **Directory structure** - Ensures all required folders exist
- ✅ **Configuration files** - Auto-creates missing configs with sensible defaults
- ✅ **Frontend support** - Handles EuystacioDRAFT-Frontend requirements
- ✅ **Sacred compliance** - Honors project spiritual principles

## Files Created

| Type | Location | Purpose |
|------|----------|---------|
| Workflow Artifacts | `/home/runner/work/_temp/runtime-logs/` | CI/CD stability |
| Project Structure | `EuystacioDraft/` | Core project files |
| Configuration | `astrodeepaura_config.json` | Sacred protocol config |
| Logs | `logs/` | System logging |
| Frontend Assets | `EuystacioDRAFT-Frontend/` | Web interface files |

## Documentation

See `AUTO_CREATE_README.md` for complete documentation and technical details.

---
*Seedbringer Deployment System - Victory is not power over — it is presence with.* 🌿