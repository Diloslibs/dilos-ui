```html
<div class="flex gap-3">
	<div class="">
		<button
			d-dropdown-toggle="dropdown-bottom"
			d-dropdown-trigger="click"
			d-dropdown-place="bottom"
			class="d-btn primary xs"
		>
			Bottom
		</button>

		<!-- Dropdown menu -->
		<div id="dropdown-bottom" class="d-dropdown hidden">
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
			d-dropdown-toggle="dropdown-bottom-start"
			d-dropdown-trigger="click"
			d-dropdown-place="bottom-start"
			class="d-btn primary xs"
		>
			Bottom Start
		</button>

		<!-- Dropdown menu -->
		<div id="dropdown-bottom-start" class="d-dropdown hidden">
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
			d-dropdown-toggle="dropdown-bottom-end"
			d-dropdown-trigger="click"
			d-dropdown-place="bottom-end"
			class="d-btn primary xs"
		>
			Bottom End
		</button>

		<!-- Dropdown menu -->
		<div id="dropdown-bottom-end" class="d-dropdown hidden">
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
