'use client';
import { useHasMounted } from '@/utils/customHook';
import { AppBar, Container, Toolbar } from '@mui/material';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const AppFooter = () => {
    const hasMounted = useHasMounted();
    if (!hasMounted) return (<></>);//fragment
    return (
        <>
            <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, background: "#f2f2f2" }}>
                <Container sx={{ display: 'flex', gap: 10 }}>
                    <AudioPlayer
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/hoidanit.mp3`}
                        volume={0.5}
                        onPlay={e => console.log("onPlay")}
                        style={{ boxShadow: 'unset', background: '#f2f2f2' }}

                    />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        justifyContent: 'center',
                        minWidth: 100
                    }}>
                        <div style={{ color: '#ccc' }}>Crocodile</div>
                        <div style={{ color: 'black' }}>Who I Am</div>
                    </div>
                </Container>
            </AppBar>

        </>
    )
};
export default AppFooter;