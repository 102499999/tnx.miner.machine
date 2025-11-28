export default {
  async fetch(request) {
    const url = new URL(request.url);
    const user_address = url.searchParams.get("user_address");

    if (!user_address) {
      return new Response(JSON.stringify({ error: "user_address required" }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    const target = `https://api.tnx.bi/api/miner.machine/list?status=&user_address=${user_address}&page=1&pageSize=1000`;
    const response = await fetch(target);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  },
};
