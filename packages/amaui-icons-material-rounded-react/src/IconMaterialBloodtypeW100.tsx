import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBloodtypeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BloodtypeW100'

      short_name='Bloodtype'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 17.35h4q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm2-3q.15 0 .25-.1t.1-.25v-1.65H14q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-1.65V10q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v1.65H10q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h1.65V14q0 .15.1.25t.25.1Zm0 6.35q-2.65 0-4.675-1.863Q5.3 16.975 5.3 13.8q0-2 1.538-4.375 1.537-2.375 4.637-5.25.125-.1.25-.15.125-.05.275-.05.15 0 .275.05.125.05.25.15 3.1 2.875 4.638 5.25Q18.7 11.8 18.7 13.8q0 3.175-2.025 5.037Q14.65 20.7 12 20.7Zm0-.7q2.525 0 4.262-1.725Q18 16.55 18 13.8q0-1.775-1.475-4.063Q15.05 7.45 12 4.65q-3.05 2.8-4.525 5.087Q6 12.025 6 13.8q0 2.75 1.737 4.475Q9.475 20 12 20Zm0-6.2Z"/>
    </Icon>
  );
});

IconMaterialBloodtypeW100.displayName = 'AmauiIconMaterialBloodtypeW100';

export default IconMaterialBloodtypeW100;
