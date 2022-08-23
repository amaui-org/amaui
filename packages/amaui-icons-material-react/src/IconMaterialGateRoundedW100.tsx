import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGateRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GateRoundedW100'
      short_name='Gate'

      {...props}
    >
      <path d="M4.45 15.55v-7.1h.7v7.1Zm2.4 1.6V9.6q0-1.15.812-1.95.813-.8 1.938-.8h4.8q1.15 0 1.95.8t.8 1.95v7.55Zm.7-.7h4.1v-4.1h-1.6v-.7h1.6v-4.1H9.6q-.85 0-1.45.6t-.6 1.45Zm4.8 0h4.1V9.6q0-.85-.6-1.45t-1.45-.6h-2.05v4.1h1.6v.7h-1.6Zm6.5-.9v-7.1h.7v7.1ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialGateRoundedW100.displayName = 'AmauiIconMaterialGateRoundedW100';

export default IconMaterialGateRoundedW100;
