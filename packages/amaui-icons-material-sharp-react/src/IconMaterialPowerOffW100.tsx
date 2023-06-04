import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOffW100'

      short_name='PowerOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 19.7v-2.55l-3.2-3.2V8.3h.35l.7.7H8v4.65l3.2 3.2V19h1.6v-2.15l1.2-1.2L1.95 3.6l.5-.5 18.4 18.4-.5.5-5.85-5.85-1 1v2.55Zm5.9-5.45-.4-.4V9h-4.85l-1.4-1.4V4.3h.7v4h3.1v-4h.7v4h2.45v5.65Zm-2.775-2.775ZM11 12.65Z"/>
    </Icon>
  );
});

IconMaterialPowerOffW100.displayName = 'AmauiIconMaterialPowerOffW100';

export default IconMaterialPowerOffW100;
