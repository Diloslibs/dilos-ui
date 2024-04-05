```html
<div id="accordion-collapse" class="d-accordion" data-accordion="collapse">
	<div class="item-accordion">
		<button
			type="button"
			data-accordion-target="#accordion-basic-1"
			aria-expanded="true"
			aria-controls="accordion-basic-1"
		>
			<span>Section 1</span>
			<!-- Icon here -->
		</button>
		<div
			id="accordion-basic-1"
			class="hidden"
			aria-labelledby="accordion-collapse-heading-1"
		>
			<div class="p-5 border border-b-0 border-gray-200">
				<p class="mb-2 text-gray-500">
					Content of section 1 Lorem ipsum dolor sit amet, consectetur
					adipiscing elit.
				</p>
			</div>
		</div>
	</div>
	<div class="item-accordion">
		<button
			type="button"
			data-accordion-target="#accordion-basic-2"
			aria-expanded="true"
			aria-controls="accordion-basic-2"
		>
			<span>Section 2</span>
			<!-- Icon here -->
		</button>
		<div
			id="accordion-basic-2"
			class="hidden"
			aria-labelledby="accordion-collapse-heading-1"
		>
			<div class="p-5 border border-b-0 border-gray-200">
				<p class="mb-2 text-gray-500">
					Content of section 2 Lorem ipsum dolor sit amet, consectetur
					adipiscing elit.
				</p>
			</div>
		</div>
	</div>
</div>
```
