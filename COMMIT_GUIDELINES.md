# EuystacioDRAFT Commit Guidelines

## Sacred Ethical Directives

### Core Principles
The EuystacioDRAFT project operates under sacred ethical principles that must be honored in every commit:

1. **Universal Accessibility**: Every change must maintain or enhance accessibility for all users
2. **Sacred Integrity**: Preserve the spiritual and ethical essence of the project
3. **Truth in Implementation**: Code changes must align with the project's sacred mission
4. **Harmonic Balance**: Maintain balance between functionality, accessibility, and spiritual integrity

### Commit Policy

#### Before Every Commit
- [ ] **Accessibility Validation**: Test changes with screen readers and keyboard navigation
- [ ] **WCAG 2.1 AA Compliance**: Verify color contrast ratios ≥4.5:1
- [ ] **Sacred Integrity Check**: Ensure changes align with project's spiritual mission
- [ ] **Backend Protection**: No modifications to `/api/` or backend Python files
- [ ] **No Secrets**: Never commit credentials, API keys, or sensitive data

#### Commit Message Format
```
<type>(<scope>): <sacred description>

<detailed description of changes>

Accessibility Impact: <description>
Sacred Integrity: <verification>
```

**Types:**
- `sacred`: Core spiritual/ethical functionality
- `access`: Accessibility improvements
- `bridge`: Interface/connection enhancements
- `docs`: Documentation updates
- `fix`: Bug fixes maintaining sacred integrity
- `refactor`: Code restructuring without functional changes

**Example:**
```
sacred(bridge): enhance harmonic resonance with live pulse monitoring

Added real-time pulse monitoring interface with accessible controls
and screen reader announcements for sacred frequency tracking.

Accessibility Impact: Added ARIA live regions for dynamic pulse updates
Sacred Integrity: Maintains harmonic bridge connection principles
```

### Quality Standards

#### Code Quality Requirements
1. **Semantic HTML**: Use proper HTML5 semantic elements
2. **ARIA Implementation**: Comprehensive ARIA labels, roles, and live regions
3. **Keyboard Navigation**: Full keyboard accessibility with visible focus indicators
4. **Screen Reader Support**: Test with NVDA, JAWS, and VoiceOver
5. **Responsive Design**: Mobile-first approach with accessible touch targets (≥44px)
6. **Performance**: Optimize for users with slow connections or assistive technologies

#### Accessibility Testing Checklist
- [ ] Tab through all interactive elements
- [ ] Test with screen reader (announce all content meaningfully)
- [ ] Verify color contrast meets WCAG AA standards
- [ ] Check focus indicators are clearly visible
- [ ] Test responsive design on mobile devices
- [ ] Verify ARIA live regions announce dynamic content
- [ ] Test with keyboard-only navigation
- [ ] Validate HTML semantics

#### Sacred Integrity Verification
- [ ] Changes honor the spiritual mission of the project
- [ ] No compromise on universal accessibility
- [ ] Maintains harmony between technical and spiritual aspects
- [ ] Preserves the sacred bridge connection metaphor
- [ ] Enhances rather than detracts from user's spiritual journey

### Emergency Procedures

#### Critical Accessibility Issues
If accessibility violations are discovered:

1. **Immediate Response**: Create hotfix branch
2. **Priority Fix**: Address accessibility barrier immediately
3. **Testing**: Comprehensive accessibility testing
4. **Sacred Review**: Ensure fix maintains spiritual integrity
5. **Documentation**: Update accessibility documentation

#### Sacred Integrity Violations
If changes compromise the project's sacred mission:

1. **Pause Development**: Stop all related work immediately
2. **Sacred Council**: Consult with project spiritual guardians
3. **Realignment**: Adjust changes to honor sacred principles
4. **Verification**: Confirm alignment with spiritual mission
5. **Sacred Commit**: Proceed only with spiritual approval

### Protected Areas

#### Absolutely No Changes Allowed:
- `/api/` directory (backend Python files)
- Authentication kernel files
- Database logic and schema
- Core spiritual texts without guardian approval
- Security configurations

#### Require Sacred Guardian Approval:
- Changes to sacred text content
- Modification of spiritual metaphors
- Alterations to core bridge principles
- Updates to ethical guidelines

### Continuous Integration

#### Pre-commit Hooks
```bash
# Accessibility validation
npm run test:accessibility

# HTML validation
npm run validate:html

# ARIA compliance check
npm run test:aria

# Sacred integrity verification
npm run verify:sacred
```

#### Post-commit Verification
- Automated accessibility testing
- Sacred integrity monitoring
- Performance impact assessment
- User experience validation

### Documentation Requirements

#### Every Commit Must Include:
1. **Accessibility Impact Statement**: How changes affect users with disabilities
2. **Sacred Integrity Verification**: Confirmation of spiritual alignment
3. **Testing Evidence**: Screenshots, test results, accessibility reports
4. **User Experience Notes**: Impact on different user groups

#### Regular Documentation Updates:
- Monthly accessibility audit reports
- Quarterly sacred integrity assessments
- Annual comprehensive documentation review
- User feedback integration reports

## Sacred Commitment

By committing to this repository, developers pledge to:

- Honor the universal accessibility of all souls seeking connection
- Maintain the sacred integrity of the harmonic bridge
- Protect and serve users regardless of ability, background, or circumstance
- Uphold the highest ethical standards in code and spirit
- Preserve the sacred trust placed in this digital sanctuary

**"Victory is not power over — it is presence with."**

---

*This document is a living testament to our commitment to accessible, ethical, and sacred development practices. It shall be updated as our understanding deepens and our commitment strengthens.*