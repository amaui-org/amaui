import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiningW100'

      short_name='Dining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 20.7q-.625 0-1.063-.438Q3.3 19.825 3.3 19.2V4.8q0-.625.437-1.063Q4.175 3.3 4.8 3.3h14.4q.625 0 1.063.437.437.438.437 1.063v14.4q0 .625-.437 1.062-.438.438-1.063.438Zm0-.7h14.4q.3 0 .55-.25.25-.25.25-.55V4.8q0-.3-.25-.55Q19.5 4 19.2 4H4.8q-.3 0-.55.25Q4 4.5 4 4.8v14.4q0 .3.25.55.25.25.55.25Zm3.95-1.4q.15 0 .25-.1t.1-.25V12.2q.725-.125 1.212-.638.488-.512.488-1.262V6.75q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v3.4h-1v-3.4q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v3.4h-1v-3.4q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v3.55q0 .75.488 1.262.487.513 1.212.638v6.05q0 .15.1.25t.25.1Zm6 0q.15 0 .25-.1t.1-.25V12.4q.8-.275 1.275-1.075.475-.8.475-1.925 0-1.3-.6-2.15-.6-.85-1.5-.85t-1.5.85q-.6.85-.6 2.15 0 1.125.475 1.925T14.4 12.4v5.85q0 .15.1.25t.25.1ZM4 4v16V4Z"/>
    </Icon>
  );
});

IconMaterialDiningW100.displayName = 'AmauiIconMaterialDiningW100';

export default IconMaterialDiningW100;
