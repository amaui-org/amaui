import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAcuteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AcuteW100'

      short_name='Acute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.75 18.7q-2.8 0-4.75-1.95Q8.05 14.8 8.05 12T10 7.25q1.95-1.95 4.75-1.95t4.75 1.95Q21.45 9.2 21.45 12t-1.95 4.75q-1.95 1.95-4.75 1.95Zm0-.7q2.5 0 4.25-1.75T20.75 12q0-2.5-1.75-4.25T14.75 6q-2.5 0-4.25 1.75T8.75 12q0 2.5 1.75 4.25T14.75 18Zm.35-6.125V8.75q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v3.1q0 .15.05.275.05.125.175.25l2.4 2.425q.1.125.238.125.137 0 .262-.125t.125-.25q0-.125-.125-.25ZM3.9 8.35q-.15 0-.25-.1T3.55 8q0-.15.1-.25t.25-.1h2.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-1 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm1 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM14.75 12Z"/>
    </Icon>
  );
});

IconMaterialAcuteW100.displayName = 'AmauiIconMaterialAcuteW100';

export default IconMaterialAcuteW100;
