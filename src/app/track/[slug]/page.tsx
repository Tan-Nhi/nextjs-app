'use client'
import { useSearchParams } from 'next/navigation'


const DetailTrack = (props: any) => {
    const { params } = props

    const searchParams = useSearchParams()

    const search = searchParams.get('audio')


    return (
        <>
            <div>Detail TrackPage</div>
        </>
    )
}
export default DetailTrack