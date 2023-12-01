
export interface LoopItemsProps<T> {
    items: T[],
    renderElemnt: (item:T,index:number)=>JSX.Element|null,
}

function LoopItems<T=any>({
    items=[],
    renderElemnt=(item,index)=>null,
}:LoopItemsProps<T>){
    return(
        <>
            {
                (items).map((item,index)=>{
                    return (
                        renderElemnt(item,index)
                    )
                })
            }
        </>
    )
}

export {
    LoopItems
}