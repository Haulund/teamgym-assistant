import { tumblingBasic } from "@/app/data/tumbling_basic_elements";


export async function GET(req: Request) {
    //const res = await fetch("https://catfact.ninja/fact").then((res) => res.json());
    return Response.json(tumblingBasic);
  }