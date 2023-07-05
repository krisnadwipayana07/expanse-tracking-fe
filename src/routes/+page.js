// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const types = [
    {
      id: 1,
      name: "expanse",
      isExpanse: true,
    },
    {
      id: 2,
      name: "income",
      isExpanse: false,
    },
  ];
  return { types };
}
