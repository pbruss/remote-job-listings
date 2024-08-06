import { useState, useEffect } from 'react'
import Jobs from "./components/Jobs.jsx";
import {StyledPageTitle} from "./components/Header.jsx";

function App() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const rawData = await fetch("https://jobicy.com/api/v2/remote-jobs");
            const {jobs} = await rawData.json();

            setData(jobs);
            setLoading(false);
        }

        fetchData()
            .then(() => console.log("API data fetching was successful..."))
            .catch(() => console.log("Error - something went wrong"));
    }, [data.length])

    return (
        <>
            <StyledPageTitle>Jobicy Remote Job Listings</StyledPageTitle>
            {
                loading ?
                    (
                        <h2>Not loaded yet. Please wait a little...</h2>
                    )
                    :
                    (
                        data.map((job) =>
                            (
                                <Jobs
                                    key={job.id}
                                    jobTitle={job.jobTitle}
                                    companyName={job.companyName}
                                    jobLevel={job.jobLevel}
                                    jobType={job.jobType}
                                    jobGeo={job.jobGeo}
                                    jobExcerpt={job.jobExcerpt}
                                    companyLogo={job.companyLogo}
                                    url={job.url}
                                />
                            )
                        )
                    )
            }

        </>
    )
}

export default App
