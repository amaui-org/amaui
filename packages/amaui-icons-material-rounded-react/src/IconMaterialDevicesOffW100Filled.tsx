import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesOffW100Filled'

      short_name='DevicesOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m341 334-28-28h482q5.95 0 9.975 4.035 4.025 4.035 4.025 10T804.975 330q-4.025 4-9.975 4H341Zm478 478-28-28V482H631v142l-28-28V482q0-11 8.5-19.5t19.792-8.5h159.416q11.292 0 19.792 8.5Q819 471 819 482v330Zm-40 114-94-94h-54.272Q620 832 611.5 823.5q-8.5-8.5-8.5-19.024V750L229 376v414h214v42H142q-8.75 0-14.875-6.176-6.125-6.177-6.125-15Q121 802 127.125 796T142 790h59V348l-74-74q-4-4-4.5-9.5T127 254q5-5 10-5t10 5l652 652q4 4 4.5 9.5t-4.717 10.717Q794 931 789 931q-5 0-10-5Z"/>
    </Icon>
  );
});

IconMaterialDevicesOffW100Filled.displayName = 'AmauiIconMaterialDevicesOffW100Filled';

export default IconMaterialDevicesOffW100Filled;
