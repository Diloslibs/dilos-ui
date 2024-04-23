```html
<div class="flex gap-3">
	<div class="">
		<button
			d-dropdown-toggle="dropdown-top"
			d-dropdown-trigger="click"
			d-dropdown-place="top"
			class="d-btn primary xs"
		>
			Top
		</button>

		<!-- Dropdown menu -->
		<div id="dropdown-top" class="d-dropdown hidden">
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
			d-dropdown-toggle="dropdown-top-start"
			d-dropdown-trigger="click"
			d-dropdown-place="top-start"
			class="d-btn primary xs"
		>
			Top Start
		</button>

		<!-- Dropdown menu -->
		<div id="dropdown-top-start" class="d-dropdown hidden">
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
			d-dropdown-toggle="dropdown-top-end"
			d-dropdown-trigger="click"
			d-dropdown-place="top-end"
			class="d-btn primary xs"
		>
			Top End
		</button>

		<!-- Dropdown menu -->
		<div id="dropdown-top-end" class="d-dropdown hidden">
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
