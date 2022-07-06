<template>
  <div class="py-6 px-3 md:px-12 w-full">
    <div>
      <p class="text-sm font-medium text-primary uppercase mb-6">Dashboard</p>
    </div>
    <div class="flex flex-wrap -mx-2 mb-4 gap-y-10">
      <DashboardMachinesInfoCard :titleTask="'Ghanimah Machines'" />
      <DashboardMachinesInfoCard :titleTask="'KASM Machines'" />
      <DashboardMachinesInfoCard :titleTask="'Challenges'" />
    </div>
  </div>
</template>

<script>
definePageMeta({
  title: "Dashboard",
  name: "Dashboard",
});
</script>
