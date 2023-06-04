import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStreetviewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StreetviewW100Filled'

      short_name='Streetview'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 11q-1.65 0-2.825-1.175Q13 8.65 13 7q0-1.65 1.175-2.825Q15.35 3 17 3q1.65 0 2.825 1.175Q21 5.35 21 7q0 1.65-1.175 2.825Q18.65 11 17 11ZM5.5 18.5q-.225-.225-.362-.513Q5 17.7 5 17.4V6.2q0-.65.475-1.125T6.6 4.6H12q-.3.525-.45 1.137Q11.4 6.35 11.4 7q0 1.175.45 2.188.45 1.012 1.2 1.762Zm6.7.5v-4.35q0-.825.525-1.488.525-.662 1.325-.862.725-.15 1.462-.225Q16.25 12 17 12q.65 0 1.238.037.587.038 1.162.163v5.2q0 .65-.475 1.125T17.8 19Z"/>
    </Icon>
  );
});

IconMaterialStreetviewW100Filled.displayName = 'AmauiIconMaterialStreetviewW100Filled';

export default IconMaterialStreetviewW100Filled;
