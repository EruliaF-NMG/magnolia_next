

const request = async<T>(
    api:string,
    httpMethod:'GET'|'POST'|'PUT'|'DELETE'='GET',
    body:any=null,
    cacheType:'SSR'|'SSG'|'ISR'='SSR',
    revalidateTime:number=60
): Promise<T> => {


    const cache:RequestInit = httpMethod==='GET'? {
        cache: cacheType==='SSR'?'no-store':cacheType==='SSG'?'force-cache':undefined,
        next: cacheType==='ISR'?{ revalidate: revalidateTime }:undefined
    }:{};

    const data = await fetch(api,{
        method: httpMethod,
        headers: {
          "Content-Type": "application/json",
        },
        body: body!=null?JSON.stringify(body):undefined,
        ...cache,
      });
    //SSR
    //const data = await fetch(api,{ cache: 'no-store' });
    //ISR
    ///const data = await fetch(api,{ next: { revalidate: 60 } });
    //SSG
    //const data = await fetch(api,{ cache: 'force-cache' });
    const post = await data.json();
    return post.data;
};

export {
  request
}