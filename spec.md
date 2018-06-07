# Retainup
## Spec
- Desktop App
- Project list
- Git repo link
    - Commits behind notifier
- Up-to-date indicator
- Last updated
- Next check
- Version info
- Open in
    - Finder
    - Editor
    - Terminal
- URLS
    - Local
    - Staging
    - Live
- Notes
- Docker up
- Updates
    - WordPress
    - ACF
    - Plugins
- Deploy
    - Ansible
    - Capistrano
- Notifications
- Terminal output for commands

## Happy Path
### No Projects
- Empty state:
    - Open folder button
    - Drag folder
- Project checks:
    - Get project name
    - Parse composer.json:
        - WordPress version
        - Private repo names with versions
        - Dependency versions
    - Check if git is up to date
### With Projects
- Display list of projects
- Projects show:
    - Name
    - Up to date indicator
    - Next check date
    - Open button
