import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddHomeWorkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeWorkW100'

      short_name='AddHomeWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.95 17v-4.35h4.1V17v-4.35h-4.1V17Zm9.75-8.35Zm-13.4 8.3v-6.525q0-.35.163-.688.162-.337.462-.537l4.2-2.975q.4-.275.875-.275t.875.275l4.2 2.975q.3.2.463.537.162.338.162.688v.425q-.2.15-.362.312-.163.163-.338.363V10L8 6.5 3 10v7h2.95v-4.35h4.1V17h1.325q.025.2.063.362.037.163.087.338H9.35v-4.35h-2.7v4.35h-3.6q-.325 0-.537-.213-.213-.212-.213-.537ZM21.7 3v7.4q-.175-.125-.337-.212Q21.2 10.1 21 10V3h-9.8v2.425l-.7-.5V3q0-.275.213-.488.212-.212.487-.212H21q.275 0 .488.212.212.213.212.488Zm-4.4 3.7h1.4V5.3h-1.4Zm.7 13q-1.55 0-2.625-1.075T14.3 16q0-1.55 1.075-2.625T18 12.3q1.55 0 2.625 1.075T21.7 16q0 1.55-1.075 2.625T18 19.7Zm-.35-3.35v2.15q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-2.15h2.15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.15V13.5q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.15H15.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Z"/>
    </Icon>
  );
});

IconMaterialAddHomeWorkW100.displayName = 'AmauiIconMaterialAddHomeWorkW100';

export default IconMaterialAddHomeWorkW100;
