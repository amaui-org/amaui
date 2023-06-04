import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerInputFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerInputFilled'

      short_name='PowerInput'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 15v-2h5v2Zm7 0v-2h5v2Zm7 0v-2h5v2ZM2 11V9h19v2Z"/>
    </Icon>
  );
});

IconMaterialPowerInputFilled.displayName = 'AmauiIconMaterialPowerInputFilled';

export default IconMaterialPowerInputFilled;
