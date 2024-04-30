```html
<div class="flex gap-3">
	<div class="">
		<button
			d-dropdown-toggle="dropdown-left"
			d-dropdown-trigger="click"
			d-dropdown-place="left"
			class="d-btn primary xs"
		>
			Left
		</button>

		<!-- Dropdown menu -->
		<div id="dropdown-left" class="d-dropdown hidden">
			<div class="d-dropdown-item-container">
				<div class="d-dropdown-item">Dashboard</div>
				<div class="d-dropdown-item">Settings</div>
				<div class="d-dropdown-item">Earnings</div>
				<div class="d-divider sm"></div>
				<div class="d-dropdown-item">Sign out</div>
			</div>
		</div>
	</div>
	<div class="">
		<button
			d-dropdown-toggle="dropdown-left-start"
			d-dropdown-trigger="click"
			d-dropdown-place="left-start"
			class="d-btn primary xs"
		>
			Left Start
		</button>

		<!-- Dropdown menu -->
		<div id="dropdown-left-start" class="d-dropdown hidden">
			<div class="d-dropdown-item-container">
				<div class="d-dropdown-item">Dashboard</div>
				<div class="d-dropdown-item">Settings</div>
				<div class="d-dropdown-item">Earnings</div>
				<div class="d-divider sm"></div>
				<div class="d-dropdown-item">Sign out</div>
			</div>
		</div>
	</div>
	<div class="">
		<button
			d-dropdown-toggle="dropdown-left-end"
			d-dropdown-trigger="click"
			d-dropdown-place="left-end"
			class="d-btn primary xs"
		>
			Left End
		</button>

		<!-- Dropdown menu -->
		<div id="dropdown-left-end" class="d-dropdown hidden">
			<div class="d-dropdown-item-container">
				<div class="d-dropdown-item">Dashboard</div>
				<div class="d-dropdown-item">Settings</div>
				<div class="d-dropdown-item">Earnings</div>
				<div class="d-divider sm"></div>
				<div class="d-dropdown-item">Sign out</div>
			</div>
		</div>
	</div>
</div>
```
