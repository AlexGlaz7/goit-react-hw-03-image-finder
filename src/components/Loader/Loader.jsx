import { Dna } from 'react-loader-spinner';
import { LoadContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoadContainer>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="Dna-loading"
        wrapperStyle={{}}
        wrapperClass="Dna-wrapper"
      />
    </LoadContainer>
  );
};
