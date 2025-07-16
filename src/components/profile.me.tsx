import { Contact, Mail, MapPin, Smartphone, Tags, X } from 'lucide-react'
import data from '../utils/utils.json'

export const Profile =()=>{
    return (
        <main className='grow flex flex-col sm:items-center overflow-y-scroll gap-5 p-5'>
            <section className='flex sm:flex-col gap-4 justify-center'>
                <div className='border-2 h-[180px] overflow-hidden w-[200px] rounded border-violet-600'>
                    <img src={data.avatar} alt="fernanda.r" />
                </div>
                <div>
                    <h1 className='font-montserrat text-xl font-semibold'>{data.name}</h1>
                    <div className='flex flex-col gap-2 font-roboto text-sm'>
                        <span className='flex gap-2 items-center hover:text-violet-400 cursor-pointer'>
                             <Mail size={17}/>
                            {data.email}</span>
                        <span className='flex gap-2 items-center hover:text-violet-400 cursor-pointer'>
                            <MapPin size={17} />
                            {data.location}</span>
                        <span className='flex gap-2 items-center hover:text-violet-400 cursor-pointer'>
                             <Smartphone size={17} />
                        {data.phone}</span>

                        <span className='flex gap-2 items-center hover:text-violet-400 cursor-pointer'>
                            <Contact size={17} />
                        {data.role}</span>
                    </div>
                </div>
            </section>
            <section className='flex flex-col gap-5'>
                    <section>
                        <div className='flex flex-col gap-4'>
                            <span className='flex gap-2 items-center text-xl font-roboto cursor-pointer'>
                                <Tags size={17}/>
                                tags : 
                            </span>
                            <div className='flex flex-wrap gap-2 '>
                                {data.tags.map((tag, index) => (
                                    <span key={index} className='bg-violet-200 p-2 rounded text-violet-600 flex items-center gap-1 w-[140px]'>
                                    <X size={14} color='white' className='cursor-pointer font-bold'/>
                                    {tag}
                                </span>))}
                            </div>
                        </div>
                    </section>
                    <section className='flex flex-col gap-4'>
                        <h1 className='font-montserrat text-xl font-semibold'>
                            Personal information
                        </h1>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-1 '>
                                <span className='font-montserrat'>Husband name : {data.husband.name}</span>
                                <span className='font-montserrat'>Age : {data.husband.age}</span>
                                <span className='font-montserrat'>Occupation : {data.husband.occupation}</span>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <span>
                                    Children : 
                                </span>
                                {data.children.map((child, index) => (
                                    <span key={index}>
                                        - {child.name}, {child.age} years old.
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>
            </section>

        </main>
    )
}