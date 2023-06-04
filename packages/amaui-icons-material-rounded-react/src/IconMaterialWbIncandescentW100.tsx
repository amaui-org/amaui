import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWbIncandescentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbIncandescentW100'

      short_name='WbIncandescent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.35q-.15 0-.25-.1t-.1-.25v-1.95q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V21q0 .15-.1.25t-.25.1Zm-9-9q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.95q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm16.05 0q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H21q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM17.8 18.8l-1.375-1.375q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l1.375 1.375q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125Zm-12.1 0q-.125-.125-.125-.25t.125-.25l1.375-1.375q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-1.375 1.375q-.1.1-.225.1T5.7 18.8Zm6.3-3.1q-1.55 0-2.625-1.075T8.3 12q0-1.05.538-1.925Q9.375 9.2 10.3 8.7V5.9q0-.3.2-.5t.5-.2h2q.3 0 .5.2t.2.5v2.8q.925.5 1.463 1.375.537.875.537 1.925 0 1.55-1.075 2.625T12 15.7Zm-1-7.25q.25-.075.488-.113.237-.037.512-.037t.512.037q.238.038.488.113V5.9h-2ZM12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0-3Z"/>
    </Icon>
  );
});

IconMaterialWbIncandescentW100.displayName = 'AmauiIconMaterialWbIncandescentW100';

export default IconMaterialWbIncandescentW100;
