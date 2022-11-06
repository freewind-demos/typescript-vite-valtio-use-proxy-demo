import React, {FC} from 'react';
import './Hello.pcss';
import {proxy} from 'valtio';
import {useProxy} from 'valtio/macro';

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
  useProxy(store);

  return <div className={'Hello'}>
    <h1>Hello {store.user}</h1>
    <input type={'text'} value={store.user} onChange={(event) => store.changeName(event.target.value)}/>
  </div>;
}
