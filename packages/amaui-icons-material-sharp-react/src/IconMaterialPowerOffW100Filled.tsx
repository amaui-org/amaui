import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOffW100Filled'

      short_name='PowerOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 19.7v-2.55l-3.2-3.2v-5.3H8v1.025L1.95 3.6l.5-.5 18.4 18.4-.5.5-5.85-5.85-1 1v2.55Zm5.9-5.45L9.75 7.6V4.3h.7v4h3.1v-4h.7v4h2.45v5.65Z"/>
    </Icon>
  );
});

IconMaterialPowerOffW100Filled.displayName = 'AmauiIconMaterialPowerOffW100Filled';

export default IconMaterialPowerOffW100Filled;
