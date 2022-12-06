import { Header } from '../apps/landing/src/common/components/header';
import { Welcome } from '../apps/landing/src/modules/welcome';

//const Main = styled.main`
//  section:not(:first-child) {
//    padding: 0 16px;
//  }

//  section {
//    margin-bottom: 60px;
//  }

//  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
//    section:not(:first-child) {
//      padding: 0 24px;
//    }
//  }

//  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
//    section:not(:first-child) {
//      padding: 0 40px;
//    }

//    section {
//      margin-bottom: 120px;
//    }
//  }

//  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
//    section {
//      margin-bottom: 140px;
//    }
//  }

//  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
//    section:not(:first-child) {
//      padding: 0 80px;
//    }

//    section {
//      margin-bottom: 250px;
//    }
//  }
//`;

export function Index() {
  return (
    <>
      <Header />
      <main>
        <Welcome />
      </main>
    </>
  );
}

export default Index;
