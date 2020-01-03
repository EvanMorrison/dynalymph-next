import React, { useEffect } from 'react'
import TrishRomano from './trishromano'
import { useRouter } from 'next/router'

const About = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/about/trishromano')
  })
  return(
    <TrishRomano/>
  );
}

export default About
