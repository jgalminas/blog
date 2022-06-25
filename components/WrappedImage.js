
import Image from 'next/image';

export default function WrappedImage({src, alt}) {
  return (
    <Image className='img' objectFit='cover' alt={alt} height={607.50} width={1080} src={src}/>
  )
}
