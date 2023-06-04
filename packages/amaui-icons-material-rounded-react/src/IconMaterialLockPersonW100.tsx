import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLockPersonW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockPersonW100'

      short_name='LockPerson'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.5 17.5q.625 0 1.062-.438Q19 16.625 19 16t-.438-1.062q-.437-.438-1.062-.438t-1.062.438Q16 15.375 16 16t.438 1.062q.437.438 1.062.438Zm0 3q.775 0 1.413-.363.637-.362 1.062-.962-.55-.325-1.175-.5t-1.3-.175q-.675 0-1.3.175t-1.175.5q.425.6 1.063.962.637.363 1.412.363ZM9 9.3h6v-2q0-1.25-.875-2.125T12 4.3q-1.25 0-2.125.875T9 7.3Zm3.8 11.4h-6q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2v-8.4q0-.65.425-1.075Q6.15 9.3 6.8 9.3h1.5v-2q0-1.55 1.075-2.625T12 3.6q1.55 0 2.625 1.075T15.7 7.3v2h1.5q.65 0 1.075.425.425.425.425 1.075v1.15q-.125-.05-.313-.075-.187-.025-.387-.025V10.8q0-.35-.225-.575Q17.55 10 17.2 10H6.8q-.35 0-.575.225Q6 10.45 6 10.8v8.4q0 .35.225.575Q6.45 20 6.8 20h5.6q.05.2.15.375.1.175.25.325Zm4.7.5q-1.55 0-2.625-1.075T13.8 17.5q0-1.55 1.075-2.625T17.5 13.8q1.55 0 2.625 1.075T21.2 17.5q0 1.55-1.075 2.625T17.5 21.2ZM6 17.5V20 10v7.5Z"/>
    </Icon>
  );
});

IconMaterialLockPersonW100.displayName = 'AmauiIconMaterialLockPersonW100';

export default IconMaterialLockPersonW100;
