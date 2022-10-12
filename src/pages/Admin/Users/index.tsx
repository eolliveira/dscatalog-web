import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { requestBackend } from '../../../http/requests';
import { User } from '../../../types/User';
import { SpringPage } from '../../../types/vendor/spring';

const Users = () => {
  const [page, setPage] = useState<SpringPage<User>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: '/users',
      //informa que req precisara passar token
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div>
      {page?.content.map((item) => (
        <p key={item.id}>{item.email}</p>
      ))}
    </div>
  );
};

export default Users;
