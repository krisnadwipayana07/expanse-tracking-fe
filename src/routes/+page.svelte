<script>
  export let data;
  let transactionData = {
    name: "",
    type: "",
    amount: 0,
  };
</script>

<div class="m-5 flex flex-col items-center">
  <div class="min-w-[600px]">
    <h1 class="font-bold text-3xl text-center">Add Transaction</h1>
    <form action="" method="post">
      <div class="flex flex-col justify-center gap-3 pt-10 w-full">
        <p class="font-medium">Nama Transaksi</p>
        <input
          class="border rounded p-2"
          type="text"
          bind:value={transactionData.name}
        />

        <p class="font-medium">Tipe Transaksi</p>
        <select class="border rounded p-2" bind:value={transactionData.type}>
          {#each data.types as item (item.id)}
            <option class="m-2" value={item.name}>{item.name}</option>
          {/each}
        </select>

        <p class="font-medium">Jumlah</p>
        <input
          class="border rounded p-2"
          type="number"
          bind:value={transactionData.amount}
        />

        <button class="mt-4 bg-slate-200 py-2 rounded font-medium" type="submit"
          >Simpan</button
        >
      </div>
    </form>
  </div>
</div>
