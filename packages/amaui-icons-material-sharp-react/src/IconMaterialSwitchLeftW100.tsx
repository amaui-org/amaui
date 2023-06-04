import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchLeftW100'

      short_name='SwitchLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 17.025 4.975 12 10 6.975Zm-.7-1.675v-6.7L5.95 12Zm4.7 1.675V6.975L19.025 12Z"/>
    </Icon>
  );
});

IconMaterialSwitchLeftW100.displayName = 'AmauiIconMaterialSwitchLeftW100';

export default IconMaterialSwitchLeftW100;
