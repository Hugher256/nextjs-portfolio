import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import Layout from '../../components/layout/article';
import { Meta, Title, WorkImage } from '../../components/work';
import P from '../../components/paragraph';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Work = () => {
  return (
    <Layout title="Inkdrop">
      <Container>
        <Title>
          Inkdrop<Badge>2016</Badge>
        </Title>
        <P>
          A markdown note-taking app with 100+ plugins, cross-platform and
          encrypted data sync support.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="www.anshitverma.com">
              www.anshitverma.com <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>MacOSX/Windows/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Electron, React Native</span>
          </ListItem>
        </List>
        <WorkImage src="/images/inkdrop_eyecactch.png" alt="Inkdrop" />
      </Container>
    </Layout>
  );
};

export default Work;
