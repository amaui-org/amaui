import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGateSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GateSharpW100Filled'
      short_name='Gate'

      {...props}
    >
      <path d="M4.45 15.55v-7.1h.7v7.1Zm14.4 0v-7.1h.7v7.1Zm-12 1.6V9.6q0-1.15.812-1.95.813-.8 1.938-.8h2.05v4.8h-1.6v.7h1.6v4.8Zm5.5 0v-4.8h1.6v-.7h-1.6v-4.8h2.05q1.15 0 1.95.8t.8 1.95v7.55Z"/>
    </Icon>
  );
});

IconMaterialGateSharpW100Filled.displayName = 'AmauiIconMaterialGateSharpW100Filled';

export default IconMaterialGateSharpW100Filled;
