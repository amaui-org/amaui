import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdUnitsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdUnitsW100'

      short_name='AdUnits'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 7.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T9 7h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-1.2 14q-.625 0-1.062-.438Q6.3 20.825 6.3 20.2V3.8q0-.625.438-1.063Q7.175 2.3 7.8 2.3h8.4q.625 0 1.062.437.438.438.438 1.063v16.4q0 .625-.438 1.062-.437.438-1.062.438ZM7 18.65h10V5.35H7Zm0 .7v.85q0 .35.225.575Q7.45 21 7.8 21h8.4q.35 0 .575-.225Q17 20.55 17 20.2v-.85Zm0-14.7h10V3.8q0-.35-.225-.575Q16.55 3 16.2 3H7.8q-.35 0-.575.225Q7 3.45 7 3.8ZM7 3v1.65V3Zm0 18v-1.65V21Z"/>
    </Icon>
  );
});

IconMaterialAdUnitsW100.displayName = 'AmauiIconMaterialAdUnitsW100';

export default IconMaterialAdUnitsW100;
