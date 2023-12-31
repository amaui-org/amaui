import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIos = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Ios'

      short_name='Ios'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-600v-80h80v80h-80Zm0 320v-240h80v240h-80Zm120 0v-400h240v400H280Zm80-80h80v-240h-80v240Zm200 80v-80h160v-80H560v-240h240v80H640v80h160v240H560Z"/>
    </Icon>
  );
});

IconMaterialIos.displayName = 'AmauiIconMaterialIos';

export default IconMaterialIos;
