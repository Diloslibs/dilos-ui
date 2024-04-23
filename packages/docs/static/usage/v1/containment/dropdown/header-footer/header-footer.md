```html
<div class="">
    <button
        d-dropdown-toggle="dropdown-header"
        d-dropdown-trigger="click"
        d-dropdown-place="bottom-start"
        class="d-btn primary xs">
        Header & Footer
    </button>

    <!-- Dropdown menu -->
    <div id="dropdown-header" class="d-dropdown hidden">
        <div class="d-dropdown-item-container">
            <div class="d-dropdown-header">Header</div>
            <div class="d-dropdown-item">Dashboard</div>
            <div class="d-dropdown-item">Settings</div>
            <div class="d-dropdown-item">Earnings</div>
            <div class="d-divider sm"></div>
            <div class="d-dropdown-item">Sign out</div>
            <div class="d-dropdown-footer">Footer</div>
        </div>
    </div>
</div>
```