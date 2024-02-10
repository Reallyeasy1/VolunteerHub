// https://nextjs.org/docs/app/building-your-application/configuring/mdx

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function MarkdownListItem(props) {
    return <Box component="li" sx={{ mt: 1, ml: 2, typography: 'body1' }} {...props} />;
}


export function useMDXComponents(components) {
    return {
        h1: props => <Typography gutterBottom variant="h4" component="h1" {...props} />,
        h2: props => <Typography gutterBottom variant="h6" component="h2" {...props} />,
        h3: props => <Typography gutterBottom variant="subtitle1" {...props} />,
        h4: props => <Typography gutterBottom variant="caption" paragraph {...props} />,
        p: props => <Typography paragraph {...props} />,
        a: props => <Link {...props} />,
        li: props => <MarkdownListItem {...props} />,
        ...components,
    }
}