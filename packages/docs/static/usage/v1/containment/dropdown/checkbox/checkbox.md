```html
<div>
	<button
		d-dropdown-toggle="dropdown-checkbox"
		d-dropdown-trigger="click"
		d-dropdown-place="bottom-start"
		class="d-btn primary xs"
	>
		Dropdown Checkbox
	</button>

	<!-- Dropdown menu -->
	<div id="dropdown-checkbox" class="d-dropdown hidden">
		<div class="d-dropdown-item-container">
			<div class="d-dropdown-item">
				<div class="d-checkbox sm">
					<input id="default-checkbox" type="checkbox" value="" />
					<label for="default-checkbox" class="label-checkbox">
						Default checkbox
					</label>
				</div>
			</div>
			<div class="d-dropdown-item">
				<div class="d-checkbox sm">
					<input id="default-checkbox-2" type="checkbox" value="" />
					<label for="default-checkbox-2" class="label-checkbox">
						Default checkbox 2
					</label>
				</div>
			</div>
			<div class="d-dropdown-item">
				<div class="d-checkbox sm">
					<input id="default-checkbox-3" type="checkbox" value="" />
					<label for="default-checkbox-3" class="label-checkbox">
						Default checkbox 3
					</label>
				</div>
			</div>
		</div>
	</div>
</div>
```
