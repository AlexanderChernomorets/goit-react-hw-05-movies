import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'Services/fetchApi';
import { ActorPhoto, CastItem, CastList, Description, Info } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setLoading(true);
        const result = await fetchCredits(movieId);
        setCast(result);
      } catch (error) {
        setError('404 Page Not Found');
      } finally {
        setLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);
  return (
    <>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      <CastList>
        {cast.map(({ id, name, character, profile_path }) => {
          return (
            <CastItem key={id}>
              <ActorPhoto
                src={`https://image.tmdb.org/t/p/w300${profile_path}` || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AfgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EAC4QAAIBAgQEBQIHAAAAAAAAAAABAgMRBAUhMRJBUWETIlJxgZGxFCMyNEJiwf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6IAAAAAAAAa6vjXXhcPfiNgA80uPh/Macux6AAAAAAAAW4C3AAAAAAB6p051JKNON5dDyW+XUlDDqdvNPV/4Bohljcbzq2l0ijfQwNKmvOlUl1e30JQA1TwtCas6UfhWIVfLpRvKg3Jel7lkAOfaadmmmt0zBZZrSVo1ktb2l3K0AAAAW4C3AAAAAABe4fTD0kvQvsURc4ByeFgpxaa0V+a5ASAAAAAEbMf2k/j7lOtizzWpalCnfWTv8IrAAAABbgLcAAAAAAM6CDUoRa2aVjnyyy7Eq0KEk+LWz5W3AngAAAAIuZW/CtvqrFQtibmOIjVcacL2i3f3IQAAAAtwFuAAAAAAD1CbhOM1vF3PIYHQQmqkIzjqpK5k1YWPDhqUXyijaANOLrKhRcr+Z6R9zcQs2i3Rg1spagVYAAAAAFuAtwAA321fYACZRy+tPWo1Bd9WTaWDo0rPh4n1lqBVUqNSq7U4OXe2hPw+XqNpVmpP0rZE7lYAAAAMThGpBxmrp8mZAFZiMulHWg+Jel7kKUZQdpxcX3R0AklJWkk10aA54FtWy+lP9DdN9tvoQa2ErUU3JXiv5RAjhbgLcAWGV0E1KtJJ62jfl3K8vMLDw8PTj/W79wNoAAAAAAAAAAAAAAAKfHUVRr+VWhJXiRluWmawvRjP0uz9iqW4GylDjqwj1ki+KfLocWKi/Smy5AwDIAwDIAwDIAwDIAwDIAwDIA04uHHhqi52uiiW50TV0c/KPDOUejaA//9k="}
                alt={`${name} portrait`}
              />
              <Info>
                <Description>Name: {name}</Description>
                <Description>Character: {character}</Description>
              </Info>
            </CastItem>
          );
        })}
      </CastList>
    </>
  );
};

export default Cast;
