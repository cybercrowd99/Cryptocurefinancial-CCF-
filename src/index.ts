export default {
  async fetch(
    request: Request,
    env: unknown,
    ctx: ExecutionContext
  ): Promise<Response> {
    return new Response(
      "Cryptocurefinancial CCF online",
      {
        status: 200,
        headers: {
          "content-type": "text/plain"
        }
      }
    );
  }
};
