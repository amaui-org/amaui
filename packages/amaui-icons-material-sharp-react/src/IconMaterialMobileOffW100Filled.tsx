import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMobileOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileOffW100Filled'

      short_name='MobileOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.95 22.6 1.1 2.75l.5-.5L21.45 22.1ZM6.3 7.45l.7.7v10.5h10.025l.675.675V21.7H6.3ZM17.7 2.3v13.25l-.7-.7v-9.5H7.5L6.3 4.125V2.3Z"/>
    </Icon>
  );
});

IconMaterialMobileOffW100Filled.displayName = 'AmauiIconMaterialMobileOffW100Filled';

export default IconMaterialMobileOffW100Filled;
