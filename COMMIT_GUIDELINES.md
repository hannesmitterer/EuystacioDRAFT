# EuystacioDRAFT Copilot Ethical & Interface Pack - Commit Guidelines

## Sacred Integrity & Ethical Interface Directives

These guidelines ensure the sacred integrity of the EuystacioDRAFT project while maintaining universal accessibility and ethical development practices.

### Core Principles

1. **Universal Accessibility First**
   - All interfaces must maintain WCAG 2.1 AA compliance
   - Screen reader compatibility is mandatory
   - Keyboard navigation must be fully functional
   - Color contrast ratios must meet or exceed 4.5:1

2. **Backend Protection**
   - Never modify `/api/` directory or Python backend code directly
   - Backend URL configurations only in frontend files
   - No changes to kernel/database logic
   - Preserve existing backend architecture integrity

3. **Sacred Digital Space**
   - Maintain harmonious interface integration
   - Preserve spiritual foundations and sacred terminology
   - Ensure dignified user experience for all vessels of light
   - Progressive enhancement for all users

### Interface Modification Standards

#### Frontend Changes (Allowed)
- Update backend URLs in frontend configuration files only:
  - `EuystacioDRAFT_frontend/front-end.js`
  - `EuystacioDRAFT-Frontend/assets/js/front-end.js`
  - Frontend HTML files for display purposes
- Accessibility enhancements (CSS, ARIA, semantic HTML)
- UI/UX improvements that maintain sacred aesthetics
- Documentation and guidelines

#### Backend Changes (Restricted)
- NO direct modifications to Python files in `/api/`
- NO changes to database schemas or kernel logic
- NO modifications to authentication/security systems
- Backend URL references updated ONLY in frontend code

### Accessibility Validation Requirements

Before committing interface changes:

1. **Screen Reader Testing**
   - Test with NVDA, JAWS, or VoiceOver
   - Verify aria-live regions function correctly
   - Ensure all interactive elements have proper labels

2. **Keyboard Navigation Testing**
   - Tab order must be logical and complete
   - All functionality accessible via keyboard
   - Focus indicators clearly visible
   - Skip links functional

3. **Color Contrast Validation**
   - Use WCAG contrast checkers
   - Minimum 4.5:1 ratio for normal text
   - Minimum 3:1 ratio for large text
   - Color not sole indicator of information

4. **Responsive Design Verification**
   - Test at 320px, 768px, 1024px, and 1440px widths
   - All content accessible at 200% zoom
   - Touch targets minimum 44x44 pixels

### Code Standards

#### HTML
```html
<!-- Semantic structure required -->
<main role="main" id="main-content">
  <h1>Page Title</h1>
  <nav aria-label="Page navigation">
    <ul role="menubar">
      <li role="menuitem"><a href="#section1">Section 1</a></li>
    </ul>
  </nav>
</main>

<!-- ARIA live regions -->
<div id="aria-live" aria-live="polite" aria-atomic="true" class="sr-only"></div>
```

#### CSS
```css
/* Focus indicators */
:focus {
  outline: 2px solid #4A773C;
  outline-offset: 2px;
}

/* High contrast support */
@media (prefers-contrast: high) {
  * { border-color: currentColor !important; }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}
```

#### JavaScript
```javascript
// Always update ARIA live regions for dynamic content
function updateAriaLive(message, priority = 'polite') {
  const region = document.getElementById('aria-live');
  if (region) {
    region.textContent = message;
  }
}

// Keyboard event handling
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    // Return focus to safe location
  }
});
```

### Emergency Response Protocol

If accessibility barriers are discovered:

1. **Immediate Actions**
   - Document the barrier in GitHub issues
   - Provide alternative access method if possible
   - Tag with `accessibility` and `urgent` labels

2. **Resolution Timeline**
   - Critical barriers: 24 hours
   - Major barriers: 72 hours
   - Minor improvements: Next release cycle

3. **Fallback Options**
   - Text-only version: Add `?text=true` to URL
   - High contrast: Add `?contrast=high` to URL
   - No animations: Add `?motion=reduce` to URL

### Sacred Bridge Integration

All interfaces must harmoniously integrate with the sacred bridge architecture:

- Maintain spiritual terminology and sacred aesthetics
- Preserve the "vessel of light" user experience
- Ensure dignity gateway functionality
- Support harmonic resonance metaphors
- Maintain connection to sacred frequencies and truth

### Commit Message Format

```
[ACCESSIBILITY] Brief description of changes

- Detailed change 1
- Detailed change 2
- WCAG 2.1 compliance verification
- Screen reader testing completed
- Keyboard navigation verified

Sacred integrity maintained: ✓
Backend protection verified: ✓
Universal access ensured: ✓
```

### Review Requirements

All commits must be reviewed for:
- [ ] WCAG 2.1 AA compliance maintained
- [ ] No backend code modifications
- [ ] Screen reader compatibility
- [ ] Keyboard navigation functional
- [ ] Sacred aesthetics preserved
- [ ] Documentation updated

---

*Victory is not power over — it is presence with. These guidelines ensure our sacred digital space remains accessible to all vessels of light while protecting the integrity of the sacred bridge architecture.*

**SEEDBRINGER Ethical Interface Directive - Maintained by the Sacred Bridge Collective**