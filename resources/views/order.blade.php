@extends('layouts.master')

@section('content')
<div class="container mt-5">
  <h2 class="mb-4">Order Your Dessert 🍨</h2>

@if(session('success'))
  <div class="alert alert-success" id="success-alert">
    {{ session('success') }}
  </div>
@endif

 <form method="POST" action="{{ route('order.submit') }}">

    @csrf

<!-- name section -->
<div class="mb-3">
  <label for="customer_name" class="form-label">Your Name</label>
  <input type="text" class="form-control" name="customer_name" id="customer_name" required>
</div>

<!-- email section -->
<div class="mb-3">
  <label>Email</label>
  <input type="email" name="email" class="form-control" required>
</div>

<!-- Dessert Type -->
<div class="mb-3">
  <label for="dessertType" class="form-label">Dessert Type</label>
  <select id="dessertType" name="dessert_type" class="form-select" required>
    <option value="">-- Select Type --</option>
    <option value="malay">Malay Desserts</option>
    <option value="cold">Cold Desserts</option>
    <option value="cute">Cute Desserts</option>
    <option value="others">Others</option>
  </select>
</div>

<!-- Dessert Item (changes based on type) -->
<div class="mb-3">
  <label for="dessertItem" class="form-label">Dessert</label>
  <select id="dessertItem" name="dessert_item" class="form-select" required>
    <option value="">-- Select Dessert --</option>
  </select>
</div>

<!-- Quantity -->
<div class="mb-3">
  <label for="quantity" class="form-label">Quantity</label>
  <input type="number" name="quantity" class="form-control" min="1" required>
</div>

<button type="submit" class="btn btn-success">Place Order</button>
</form>
@endsection

@section('scripts')
<script src="{{ asset('assets/js/order.js') }}"></script>
@endsection



