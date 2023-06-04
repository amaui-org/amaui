import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddToHomeScreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToHomeScreenW100Filled'

      short_name='AddToHomeScreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.15 15.85q-.125-.125-.125-.25t.125-.25l6-6H6q-.15 0-.25-.1T5.65 9q0-.15.1-.25t.25-.1h4.6q.325 0 .538.212.212.213.212.538V14q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V9.85l-6 6q-.1.1-.238.112-.137.013-.262-.112ZM8.8 21.7q-.625 0-1.062-.438Q7.3 20.825 7.3 20.2v-3.1H8v1.55h10V5.35H8V6.9h-.7V3.8q0-.625.438-1.063Q8.175 2.3 8.8 2.3h8.4q.625 0 1.062.437.438.438.438 1.063v16.4q0 .625-.438 1.062-.437.438-1.062.438Z"/>
    </Icon>
  );
});

IconMaterialAddToHomeScreenW100Filled.displayName = 'AmauiIconMaterialAddToHomeScreenW100Filled';

export default IconMaterialAddToHomeScreenW100Filled;
