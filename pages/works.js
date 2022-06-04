import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { WorkGridItem } from '../components/grid-item';
import Layout from '../components/layout/article';
import Section from '../components/section';
import thumbInkdrop from '../public/images/inkdrop_eyecatch.png';

function Works() {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
              A markdown note taking app
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="walknote"
              title="Walknote"
              thumbnail={thumbInkdrop}
            >
              Music recommendation app for iOS
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}

export default Works;
