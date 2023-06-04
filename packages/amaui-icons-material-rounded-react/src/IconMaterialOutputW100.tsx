import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutputW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutputW100'

      short_name='Output'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h12.4q.625 0 1.063.437.437.438.437 1.063v.85q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V5.8q0-.35-.225-.575Q18.55 5 18.2 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19h12.4q.35 0 .575-.225Q19 18.55 19 18.2v-.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v.85q0 .625-.437 1.062-.438.438-1.063.438Zm13.275-7.35H10.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8.575l-2.975-3q-.1-.1-.1-.25t.1-.25q.1-.1.25-.1t.25.1l3.3 3.325q.225.225.225.525 0 .3-.225.525l-3.3 3.325q-.1.1-.25.1t-.25-.1q-.1-.1-.1-.25t.1-.25Z"/>
    </Icon>
  );
});

IconMaterialOutputW100.displayName = 'AmauiIconMaterialOutputW100';

export default IconMaterialOutputW100;
