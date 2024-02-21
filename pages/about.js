import Image from 'next/image'
import React from 'react'
import Paragraph from '../components/text/Paragraph'
import Title from '../components/text/Title'
import MetaSeo from '../components/MetaSeo'
import http from '../utilities/http'
import constant from '../utilities/constant'

export default function about({ profile }) {
    return (
        <div className='flex justify-center  py-16'>
            <MetaSeo
                title="About - Kevin"
                description={"My name is Kevin Cattt. I am an AI engineer and fullstack web developer, currently a Master's student and teaching assistant at SIIT, Thammasat University."}
            />
            <div className='flex xl:w-8/12 w-full justify-center items-center flex-col'>
                <Image src="/img/kevin-real.jpg" data-aos="fade-up" alt='Kevin' className='rounded-full object-cover' height={235} width={240} />
                <div className='mt-12 flex flex-col justify-start w-full' data-aos="fade-up">
                    <Title>About</Title>
                    <Paragraph className='mt-8'>
                        {/* <div dangerouslySetInnerHTML={{ __html: profile.description }} className="content-desc" /> */}
                        <div className="content-desc">
                            <p>
                            I am a fullstack developer specialized in AI development. Experienced in working with various AI models and a complete pipeline for training and deployment.
                            My favorite go-to tools that I use are: <br/>
                            Deep learning framework<br/>
                            - Pytorch, Tensorflow<br/>
                            Web application framework<br/>
                            - Flask, Django, Laravel<br/>
                            Frontend framework<br/>
                            - ReactJS. NextJS<br/>
                            Database<br/>
                            - MySQL, MS SQL, MongoDB, Neo4j<br/>
                            I also have a bit experience with Android development and Flutter framework.
                            </p>
                        </div>
                    </Paragraph>
                </div>
            </div>
        </div>
    )
}


export async function getStaticProps() {
    const req = await http.get("/item/about");
    return {
        props: {
            profile: req.data
        }
    }
}
