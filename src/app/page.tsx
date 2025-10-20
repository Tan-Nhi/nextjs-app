import MainSlider from "@/components/main/main.slider";
import { sendRequest } from "@/utils/api";
import { Container } from "@mui/material";


export default async function HomePage() {
  // const response = await fetch('http://localhost:8000/api/v1/tracks/top', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     category: "CHILL",
  //     limit: 10
  //   }),
  // });

  const chill = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: {
      category: "CHILL",
      limit: 10
    },
  })

  const workouts = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: {
      category: "WORKOUT",
      limit: 10
    },
  })

  const party = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: {
      category: "PARTY",
      limit: 10
    },
  })

  return (
    <>
      <Container>
        <MainSlider
          title={'Top Chill'}
          data={chill?.data ?? []}
        />
        <MainSlider
          title={'Top Workout'}
          data={workouts?.data ?? []}
        />
        <MainSlider
          title={'Top Party'}
          data={party?.data ?? []}
        />
      </Container>
    </>
  );
}
