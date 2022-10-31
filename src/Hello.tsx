import React, {FC} from 'react';
import './Hello.pcss';
import {proxy, useSnapshot} from 'valtio';

const store = proxy({
    user: 'AAA' as string,
    changeName: (value: string) => {
      console.log("### new value: ", value)
      // Use `store` here
      store.user = value
    },
    hello: () => console.log(`Hello, ${store.user}`)
  }
);

export const Hello: FC = () => {
  const {user} = useSnapshot(store);

  return <div className={'Hello'}>
    <h1>Hello {user}</h1>
    <input type={'text'} value={user} onChange={(event) => store.changeName(event.target.value)}/>
  </div>;
}
