import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkEraseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkEraseW100'

      short_name='PhonelinkErase'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.75 15.1-.5-.5 2.6-2.6-2.6-2.6.5-.5 2.6 2.6 2.6-2.6.5.5-2.6 2.6 2.6 2.6-.5.5-2.6-2.6ZM6 21h10v-1.65H6ZM6 4.65h10V3H6ZM5.3 21.7V2.3h11.4v4.6H16V5.35H6v13.3h10V17.1h.7v4.6ZM6 4.65V3v1.65ZM6 21v-1.65V21Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkEraseW100.displayName = 'AmauiIconMaterialPhonelinkEraseW100';

export default IconMaterialPhonelinkEraseW100;
