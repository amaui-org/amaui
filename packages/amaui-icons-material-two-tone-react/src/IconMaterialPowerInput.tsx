import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerInput = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerInput'

      short_name='PowerInput'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z"/>
    </Icon>
  );
});

IconMaterialPowerInput.displayName = 'AmauiIconMaterialPowerInput';

export default IconMaterialPowerInput;
