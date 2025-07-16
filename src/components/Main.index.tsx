import data from '../utils/utils.json'

export const IndexMain = ()=>{
    return(
        <div className=" grow overflow-y-scroll flex flex-col gap-5 p-5 ">
            <section className='flex sm:flex-row flex-col items-center xl:gap-5 justify-center gap-4 h-[650px]'>
                <div className='flex flex-col gap-3 p-5 h-[400px] min-w-[300px]'>
                    <h1 className='text-5xl font-montserrat'>
                        {data.name}
                    </h1>
                    <span className='font-montserrat max-w-[500px]'>
                        keep my money and manege my family
                        <span className='p-2 font-bold font-roboto text-blue-300'>economy</span>
                        has just become easier with Girls Management , an app that helps you manege your financial issues
                    </span>
                </div>
                <div className='bg-[#be9266]  h-[400px] min-w-[300px] overflow-visible  flex justify-center  rounded justify-self-center'>
                    <img src={data.avatar} alt="user" className='' />
                </div>
            </section>
            <section className='flex flex-col gap-3'>
                <h1 className='font-montserrat text-2xl font-semibold'>
                    Formation
                </h1>

                {data.educationHistory.map((item,index)=>{
                    return(
                        <div key={index} className='flex flex-col gap-2 p-2 border-2 rounded text-sm font-montserrat border-violet-300 hover:bg-violet-300'>
                            <h1>
                                {item.institution} - {item.degree} ({item.startYear} - {item.endYear}) - {item.location}
                            </h1>
                        </div>
                    )
                })}
            </section>
            <section className='flex flex-col gap-3 items-end justify-end'>
                <h1 className='font-montserrat text-2xl font-semibold'>
                    Work experience
                </h1>

                {data.workExperience.map((item,index)=>{
                    return(
                        <div key={index} className='flex flex-col gap-2 p-2 border-2 rounded text-sm font-montserrat border-violet-300 hover:bg-violet-300'>
                            <h1>
                                {item.company} - {item.position} ({item.startDate} - {item.endDate}) - {item.location}
                            </h1>
                            <span>
                                {item.description}
                            </span>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}