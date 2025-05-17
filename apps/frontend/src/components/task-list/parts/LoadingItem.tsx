
export default function LoadingItem() {
  return (
    <div className={`flex flex-row justify-between gap-2 items-center w-full p-4 border rounded-md border-gray-400`}>
        <div className="min-w-[500px] flex flex-col items-start justify-between gap-2 animate-pulse">
            <div className='h-[30px] w-full bg-gray-300 rounded-sm mb-4'/>
            <div className='h-[20px] w-full bg-gray-300 rounded-sm'/>
            <div className='h-[20px] w-full bg-gray-300 rounded-sm'/>
            <div className='h-[20px] w-full bg-gray-300 rounded-sm'/>
        </div>
    </div>
  )
}