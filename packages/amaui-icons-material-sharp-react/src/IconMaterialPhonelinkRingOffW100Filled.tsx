import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkRingOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkRingOffW100Filled'

      short_name='PhonelinkRingOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M838 1000 44 206l20-20 794 794-20 20ZM252 394l28 28v420h401l27 27v95H252V394Zm48-84-48-49v-73h456v184h-28v-62H300Zm400 360-20-20q17-14 28-33t11-41q0-22-11-41t-28-33l20-20q21 18 34 42t13 52q0 28-13 52t-34 42Zm82 82-20-20q31-31 47.5-71.5T826 576q0-44-16.5-84.5T762 420l20-20q35 35 53.5 80.5T854 576q0 50-18.5 95.5T782 752Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkRingOffW100Filled.displayName = 'AmauiIconMaterialPhonelinkRingOffW100Filled';

export default IconMaterialPhonelinkRingOffW100Filled;
