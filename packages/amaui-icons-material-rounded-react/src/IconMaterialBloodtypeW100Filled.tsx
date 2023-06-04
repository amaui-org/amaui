import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBloodtypeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BloodtypeW100Filled'

      short_name='Bloodtype'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 17.35h4q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm2-3q.15 0 .25-.1t.1-.25v-1.65H14q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-1.65V10q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v1.65H10q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h1.65V14q0 .15.1.25t.25.1Zm0 6.35q-2.65 0-4.675-1.863Q5.3 16.975 5.3 13.8q0-2 1.538-4.375 1.537-2.375 4.637-5.25.125-.1.25-.15.125-.05.275-.05.15 0 .275.05.125.05.25.15 3.1 2.875 4.638 5.25Q18.7 11.8 18.7 13.8q0 3.175-2.025 5.037Q14.65 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialBloodtypeW100Filled.displayName = 'AmauiIconMaterialBloodtypeW100Filled';

export default IconMaterialBloodtypeW100Filled;
