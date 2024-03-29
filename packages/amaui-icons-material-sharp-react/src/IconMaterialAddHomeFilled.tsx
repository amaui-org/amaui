import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddHomeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeFilled'

      short_name='AddHome'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 21q-2.075 0-3.537-1.462Q13 18.075 13 16q0-2.075 1.463-3.538Q15.925 11 18 11t3.538 1.462Q23 13.925 23 16q0 2.075-1.462 3.538Q20.075 21 18 21Zm-.5-2h1v-2.5H21v-1h-2.5V13h-1v2.5H15v1h2.5ZM4 19V7l8-6 8 6v2.3q-.475-.15-.975-.225Q18.525 9 18 9q-2.9 0-4.95 2.05Q11 13.1 11 16q0 .775.163 1.538.162.762.512 1.462Z"/>
    </Icon>
  );
});

IconMaterialAddHomeFilled.displayName = 'AmauiIconMaterialAddHomeFilled';

export default IconMaterialAddHomeFilled;
