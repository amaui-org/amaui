import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesOffW100'

      short_name='DevicesOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m341 334-28-28h496v28H341Zm478 478-28-28V482H631v142l-28-28V482q0-11 8.5-19.5T631 454h160q11 0 19.5 8.5T819 482v330Zm-30 124L685 832h-54q-11 0-19.5-8.5T603 804v-54L229 376v414h214v42H121v-42h80V348l-84-84 20-20 672 672-20 20Z"/>
    </Icon>
  );
});

IconMaterialDevicesOffW100.displayName = 'AmauiIconMaterialDevicesOffW100';

export default IconMaterialDevicesOffW100;
