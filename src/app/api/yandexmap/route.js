// export async function GET() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts = await res.json();

import { NextRequest } from 'next/server';

//   return Response.json({ posts });
// }

export async function GET(req) {
  req = new NextRequest();
}
