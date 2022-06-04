import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { GridItem } from '../components/grid-item';
import Layout from '../components/layout/article';
import Section from '../components/section';
import fishThumbnail from '../public/images/youtube-fish-workflow.jpeg';

function Posts() {
  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h4" fontSize={20} mb={4}>
          Popular Posts
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="My Fish Workflow"
              thumbnail={fishThumbnail}
              href="https://www.youtube.com/watch?v=bSMZgXzC9AA&list=WL&index=59&t=362s&ab_channel=devaslife"
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
}
export default Posts;
