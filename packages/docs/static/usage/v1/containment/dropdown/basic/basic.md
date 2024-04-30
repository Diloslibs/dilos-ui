```html
<div>
    <button
        d-dropdown-toggle="dropdown-basic"
        d-dropdown-trigger="click"
        d-dropdown-place="bottom-start"
        class="d-btn primary xs"
    >
        Basic Dropdown
    </button>

    <!-- Dropdown menu -->
    <div id="dropdown-basic" class="d-dropdown hidden">
        <div class="d-dropdown-item-container">
            <div class="d-dropdown-item">Dashboard</div>
            <div class="d-dropdown-item">Settings</div>
            <div class="d-dropdown-item">Earnings</div>
            <div class="d-divider sm"></div>
            <div class="d-dropdown-item">Sign out</div>
        </div>
    </div>
</div>
```