import * as React from "react";
import Container from "@mui/material/Container";
import Banner from "./Banner";
import FeatureCard from "./FeatureCard";
import Grid from "@mui/material/Grid";
import Sidebar from "./Sidebar";
import Main from "./Main";

export default function Event({ params }) {
    const { id } = params;

    const banner = {
        title: `Event ${id}`,
        description: `A description about event ${id}`,
        image: 'https://source.unsplash.com/random?wallpapers',
        imageText: "imageText",
    };

    const features = [
        {
            title: 'Enroll',
            status: 'You have not yet enrolled',
            description:
            'Interested in this event? Enroll now by Nov 12',
            image: 'https://source.unsplash.com/random?wallpapers',
            imageLabel: 'Image Text',
            buttonLabel: 'Enroll'
        },
        {
            title: 'Enquire',
            status: `Have any questions for us?`,
            description:
              'Email us at abcde@xyz.com',
            image: 'https://source.unsplash.com/random?wallpapers',
            imageLabel: 'Image Text',
            buttonLabel: 'Enquire'
        },
    ];

    const sidebar = {
        title: "About",
        description:
            "Some description about the event",
        social: [
            { name: "Telegram", icon: "Telegram" },
            { name: "Facebook", icon: "Facebook" },
        ],
    };
    
    return (
        <Container>
            <Banner banner={banner}/>
            <Grid container spacing={4}>
                {features.map((feature) => (
                    <FeatureCard key={feature.title} feature={feature} />
                ))}
            </Grid>
            <Grid container spacing={5} sx={{ mt: 3 }}>
                <Main title="Announcements" />
                <Sidebar
                    title={sidebar.title}
                    description={sidebar.description}
                    archives={sidebar.archives}
                    social={sidebar.social}
                />
            </Grid>
        </Container>
    );
}