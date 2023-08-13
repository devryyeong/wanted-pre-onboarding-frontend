import styled from '@emotion/styled';

const Ad = ({ keyIndex, imgSrc }: { keyIndex: number; imgSrc: string; }) => {
  return (
    <ImageList key={`ad-${keyIndex}`}>
      <a href="https://www.wanted.co.kr/" target="_blank" rel="noreferrer">
        <img className="img" src={imgSrc} alt="Advertisement" />
      </a>
    </ImageList>
  );
};

export default Ad;

const ImageList = styled.li`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    padding: 20px 0;
  }

  img {
    width: 50%;
    object-fit: contain;
  }
`;