import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export const GET = async (request: Request) => {
  draftMode().enable();
  console.log("Draft mode is enabled");
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  const redirectURL= slug + "?" +  searchParams.toString();
  redirect(redirectURL);
}
