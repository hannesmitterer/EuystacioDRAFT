# EuystacioDRAFT Commit Guidelines

## Ethical & Interface Pack Directives

This document outlines the commit guidelines and policies for the EuystacioDRAFT Copilot Ethical & Interface Pack implementation.

## Core Principles

### 1. Sacred Code Integrity
- **No Backend Modifications**: Commits must never alter backend kernel logic or dynamic processing
- **Frontend Only**: All changes must be limited to frontend interfaces, styling, and documentation
- **Preservation**: Existing backend functionality must remain completely intact

### 2. Accessibility First
- **WCAG 2.1 AA Compliance**: All interface changes must meet or exceed WCAG 2.1 AA standards
- **Universal Design**: Interfaces must be usable by people with diverse abilities
- **Testing Required**: Accessibility features must be tested with assistive technologies

### 3. Transparency & Documentation
- **Complete Documentation**: Every change must be thoroughly documented
- **Reproducibility**: All modifications must be clearly explained for future maintainers
- **Change Logs**: Maintain detailed records of all interface modifications

## Commit Policy

### Commit Message Format
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

#### Types
- `feat`: New frontend feature or interface component
- `fix`: Bug fix in frontend code only
- `docs`: Documentation changes
- `style`: CSS/styling changes
- `refactor`: Frontend code refactoring (no functionality change)
- `accessibility`: Accessibility improvements
- `test`: Adding or modifying frontend tests

#### Scopes
- `frontend`: EuystacioDRAFT_frontend directory changes
- `accessibility`: Accessibility-related changes
- `interface`: User interface components
- `docs`: Documentation updates
- `guidelines`: Policy and guideline updates

#### Examples
```bash
feat(frontend): add 3D dashboard placeholder interface
accessibility(interface): implement ARIA live regions for screen readers
docs(guidelines): create commit guidelines for ethical interface pack
style(frontend): enhance responsive design for mobile accessibility
```

### Pre-commit Requirements

#### 1. Backend Protection Check
Before any commit, verify:
- [ ] No changes to `/api/` directory
- [ ] No changes to Python backend files
- [ ] No modifications to database logic
- [ ] No alterations to authentication kernel

#### 2. Accessibility Validation
- [ ] All new interactive elements have proper ARIA labels
- [ ] Color contrast ratios meet WCAG 2.1 AA standards (4.5:1 minimum)
- [ ] All functionality is keyboard accessible
- [ ] Screen reader announcements are properly implemented
- [ ] Focus management is correct

#### 3. Documentation Update
- [ ] README.md updated if necessary
- [ ] Interface changes documented
- [ ] Accessibility features documented
- [ ] API endpoint references verified

### File Structure Restrictions

#### Allowed Modifications
```
EuystacioDRAFT/
├── EuystacioDRAFT_frontend/     ✅ Frontend interfaces
├── accessibility.css           ✅ Accessibility styles
├── aria-live.html             ✅ Accessibility demos
├── dignity_gateway.html       ✅ Public portal interface
├── interface.html             ✅ Bridge interface
├── docs/                      ✅ Documentation
├── assets/                    ✅ Static assets
└── *.md                       ✅ Documentation files
```

#### Restricted Areas
```
EuystacioDRAFT/
├── api/                       ❌ Backend API code
├── astro*.py                  ❌ Python backend modules
├── *.py                       ❌ Python scripts
├── bridge_log.json           ❌ Backend data files
├── pulse_log.json            ❌ Backend data files
└── sacred/                   ❌ Backend sacred modules
```

## Quality Standards

### Code Quality
- **Clean Code**: Follow established coding standards
- **Semantic HTML**: Use proper semantic elements
- **Progressive Enhancement**: Ensure basic functionality without JavaScript
- **Performance**: Optimize for loading speed and responsiveness

### Accessibility Standards
- **Screen Reader Support**: All content must be accessible to screen readers
- **Keyboard Navigation**: Full keyboard navigation support required
- **Color Independence**: Information must not rely solely on color
- **Text Alternatives**: All images and media must have text alternatives

### Testing Requirements
- **Cross-Browser**: Test in major browsers (Chrome, Firefox, Safari, Edge)
- **Mobile Responsive**: Test on various screen sizes
- **Accessibility Tools**: Validate with accessibility testing tools
- **Manual Testing**: Test with actual assistive technologies when possible

## Review Process

### Self-Review Checklist
Before submitting any commit:
- [ ] No backend files modified
- [ ] All accessibility requirements met
- [ ] Documentation updated
- [ ] Code follows style guidelines
- [ ] Testing completed
- [ ] Commit message follows format

### Peer Review Focus
Reviewers should focus on:
- Backend protection verification
- Accessibility compliance
- Documentation completeness
- Code quality and standards
- User experience considerations

## Backend URL Configuration

### Standard Backend Reference
All frontend assets must reference the approved backend URL:
```javascript
const BACKEND_URL = "https://euystacio-ai-q3hh.onrender.com";
```

### URL Change Protocol
If backend URL needs to change:
1. Update only in frontend configuration files
2. Document the change reason
3. Test all frontend functionality
4. Update all references consistently

## Emergency Procedures

### Backend Contamination Response
If backend files are accidentally modified:
1. **Immediate Revert**: Use `git checkout HEAD~1 <file>` to restore
2. **Verify Restoration**: Confirm backend functionality intact
3. **Document Incident**: Record what happened and prevention measures
4. **Re-implement**: Apply only frontend changes properly

### Accessibility Regression
If accessibility is broken:
1. **Priority Fix**: Treat as highest priority issue
2. **User Impact Assessment**: Evaluate affected user groups
3. **Rapid Resolution**: Implement fix within 24 hours
4. **Testing Verification**: Comprehensive accessibility re-testing

## Continuous Improvement

### Monthly Reviews
- Review accessibility compliance
- Update guidelines based on new standards
- Assess user feedback incorporation
- Evaluate development process efficiency

### Quarterly Audits
- Comprehensive accessibility audit
- Backend protection verification
- Documentation completeness review
- Performance optimization assessment

## Contact & Support

For questions about these guidelines:
- Review existing documentation first
- Consult accessibility.css and aria-live.html examples
- Follow established patterns in dignity_gateway.html
- Maintain consistency with existing interfaces

## License Compliance

All modifications must comply with the SACRED_COMMON_LICENSE.md terms and maintain the sacred nature of the EuystacioDRAFT project while ensuring universal accessibility.

---

*These guidelines ensure the EuystacioDRAFT project maintains its sacred integrity while providing accessible, inclusive interfaces for all users.*