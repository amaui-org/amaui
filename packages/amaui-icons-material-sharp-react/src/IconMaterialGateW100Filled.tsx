import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GateW100Filled'

      short_name='Gate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.45 15.55v-7.1h.7v7.1Zm14.4 0v-7.1h.7v7.1Zm-12 1.6V9.6q0-1.15.812-1.95.813-.8 1.938-.8h2.05v4.8h-1.6v.7h1.6v4.8Zm5.5 0v-4.8h1.6v-.7h-1.6v-4.8h2.05q1.15 0 1.95.8t.8 1.95v7.55Z"/>
    </Icon>
  );
});

IconMaterialGateW100Filled.displayName = 'AmauiIconMaterialGateW100Filled';

export default IconMaterialGateW100Filled;
