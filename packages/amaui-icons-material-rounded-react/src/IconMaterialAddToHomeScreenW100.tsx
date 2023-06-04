import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddToHomeScreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToHomeScreenW100'

      short_name='AddToHomeScreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.15 15.85q-.125-.125-.125-.25t.125-.25l6-6H6q-.15 0-.25-.1T5.65 9q0-.15.1-.25t.25-.1h4.6q.325 0 .538.212.212.213.212.538V14q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V9.85l-6 6q-.1.1-.238.112-.137.013-.262-.112ZM18 19.35H8v.85q0 .35.225.575Q8.45 21 8.8 21h8.4q.35 0 .575-.225Q18 20.55 18 20.2Zm0-14.7V3.8q0-.35-.225-.575Q17.55 3 17.2 3H8.8q-.35 0-.575.225Q8 3.45 8 3.8v.85ZM8.8 21.7q-.625 0-1.062-.438Q7.3 20.825 7.3 20.2v-3.1H8v1.55h10V5.35H8V6.9h-.7V3.8q0-.625.438-1.063Q8.175 2.3 8.8 2.3h8.4q.625 0 1.062.437.438.438.438 1.063v16.4q0 .625-.438 1.062-.437.438-1.062.438ZM8 3v1.65V3Zm0 18v-1.65V21Z"/>
    </Icon>
  );
});

IconMaterialAddToHomeScreenW100.displayName = 'AmauiIconMaterialAddToHomeScreenW100';

export default IconMaterialAddToHomeScreenW100;
