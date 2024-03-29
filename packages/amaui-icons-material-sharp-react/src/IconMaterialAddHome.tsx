import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddHome = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHome'

      short_name='AddHome'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.5 19h1v-2.5H21v-1h-2.5V13h-1v2.5H15v1h2.5Zm.5 2q-2.075 0-3.537-1.462Q13 18.075 13 16q0-2.075 1.463-3.538Q15.925 11 18 11t3.538 1.462Q23 13.925 23 16q0 2.075-1.462 3.538Q20.075 21 18 21ZM4 19V7l8-6 8 6v2.3q-.475-.15-.975-.225Q18.525 9 18 9V8l-6-4.5L6 8v9h5.075q.075.525.225 1.025.15.5.375.975Zm8-8.75Z"/>
    </Icon>
  );
});

IconMaterialAddHome.displayName = 'AmauiIconMaterialAddHome';

export default IconMaterialAddHome;
