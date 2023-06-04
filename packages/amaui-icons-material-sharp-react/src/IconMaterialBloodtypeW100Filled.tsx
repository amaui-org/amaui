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
      <path d="M9.65 17.35h4.7v-.7h-4.7Zm2-3h.7v-2h2v-.7h-2v-2h-.7v2h-2v.7h2ZM12 20.7q-2.65 0-4.675-1.863Q5.3 16.975 5.3 13.8q0-2.075 1.675-4.575T12 3.7q3.35 3.025 5.025 5.525 1.675 2.5 1.675 4.575 0 3.175-2.025 5.037Q14.65 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialBloodtypeW100Filled.displayName = 'AmauiIconMaterialBloodtypeW100Filled';

export default IconMaterialBloodtypeW100Filled;
