```html
<div class="">
	<button
		d-dropdown-toggle="dropdown-footer-btn"
		d-dropdown-trigger="click"
		d-dropdown-place="bottom-start"
		class="d-btn primary xs"
	>
		With Footer Button
	</button>

	<!-- Dropdown menu -->
	<div id="dropdown-footer-btn" class="d-dropdown hidden">
		<div class="d-dropdown-item-container">
			<div class="d-dropdown-item">Dashboard</div>
			<div class="d-dropdown-item">Settings</div>
			<div class="d-dropdown-item">Earnings</div>
			<div class="d-divider sm"></div>
			<div class="d-dropdown-item">Sign out</div>
			<div class="d-dropdown-footer">
				<div class="flex gap-2 justify-end w-52">
					<button class="d-btn primary-outline xs">Button</button>
					<button class="d-btn primary xs">Button</button>
				</div>
			</div>
		</div>
	</div>
</div>
```
