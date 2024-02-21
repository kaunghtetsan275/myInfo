import React from 'react'
import Section from '../components/layouts/Section'
import Paragraph from '../components/text/Paragraph'
import http from '../utilities/http'
import MetaSeo from '../components/MetaSeo'
import Image from 'next/image'

export default function contact({ contacs }) {
    return (
        <Section title="Contact" className="mt-0">
            <MetaSeo
                title="Contact - Cattt Family"
                description={"You can contact me in many ways, I will be very happy if you contact me."}
            />
            <div className='pb-36 w-full py-12 flex justify-between' data-aos="fade-up">
                <div className='flex-1 w-full'>
                    <Paragraph>
                        You can contact me in many ways, I will be very happy if you contact me
                    </Paragraph>
                    <ul className='mt-10 list-disc list-inside'>
                        <li className='mb-5'>
                            <span>Email - <a className='font-semibold underline'>kevin@cattt.org</a></span>
                        </li>
                        <li className='mb-5'>
                            <span>Linkedin - <a href='https://www.linkedin.com/in/kaunghtetsan/' className='font-semibold underline'>Kaung Htet San (Kevin)</a></span>
                        </li>
                        <li className='mb-5'>
                            <span>Github - <a href='https://github.com/kaunghtetsan275' className='font-semibold underline'>Oishii Sakana</a></span>
                        </li>
                        <li className='mb-5'>
                            <span>Instagram - <a href='https://www.instagram.com/kevin.cattt/' className='font-semibold underline'>kevin.cattt</a></span>
                        </li>
                    </ul>
                </div>
                <div className='hidden xl:block md:block pl-36 relative'>
                    <Image
                        src='/img/contact.png'
                        alt='contact-backgorund'
                        layout='fill'
                        height={200}
                        width={200}
                        objectFit="contain"
                        className={`dark:invert invert-0`}
                    />
                </div>
            </div>
        </Section>
    )
}

export async function getStaticProps() {
    const req = await http.get("items/contact");
    const contacs = req.data;
    return {
        props: {
            contacs
        }
    }
}
