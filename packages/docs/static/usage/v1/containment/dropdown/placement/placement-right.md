```html
<div class="flex gap-3">
	<div class="">
		<button
			d-dropdown-toggle="dropdown-right"
			d-dropdown-trigger="click"
			d-dropdown-place="right"
			class="d-btn primary xs"
		>
			Right
		</button>

		<!-- Dropdown menu -->
		<div id="dropdown-right" class="d-dropdown hidden">
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
			d-dropdown-toggle="dropdown-right-start"
			d-dropdown-trigger="click"
			d-dropdown-place="right-start"
			class="d-btn primary xs"
		>
			Right Start
		</button>

		<!-- Dropdown menu -->
		<div id="dropdown-right-start" class="d-dropdown hidden">
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
			d-dropdown-toggle="dropdown-right-end"
			d-dropdown-trigger="click"
			d-dropdown-place="right-end"
			class="d-btn primary xs"
		>
			Right End
		</button>

		<!-- Dropdown menu -->
		<div id="dropdown-right-end" class="d-dropdown hidden">
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
