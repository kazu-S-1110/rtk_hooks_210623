import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsyncGet, selectPhotos } from './fetchSlice';

const Fetch = () => {
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos);
  useEffect(() => {
    dispatch(fetchAsyncGet());
  }, [dispatch]);
  return (
    <div>
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.url} alt="" width="100" />
        </div>
      ))}
    </div>
  );
};

export default Fetch;
