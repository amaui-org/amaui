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
      <path d="M9.65 17.35h4.7v-.7h-4.7Zm2-3h.7v-2h2v-.7h-2v-2h-.7v2h-2v.7h2ZM12 20.7q-2.65 0-4.675-1.863Q5.3 16.975 5.3 13.8q0-2.075 1.675-4.575T12 3.7q3.35 3.025 5.025 5.525 1.675 2.5 1.675 4.575 0 3.175-2.025 5.037Q14.65 20.7 12 20.7Zm0-.7q2.525 0 4.262-1.725Q18 16.55 18 13.8q0-1.775-1.475-4.063Q15.05 7.45 12 4.65q-3.05 2.8-4.525 5.087Q6 12.025 6 13.8q0 2.75 1.737 4.475Q9.475 20 12 20Zm0-6.2Z"/>
    </Icon>
  );
});

IconMaterialBloodtypeW100.displayName = 'AmauiIconMaterialBloodtypeW100';

export default IconMaterialBloodtypeW100;
