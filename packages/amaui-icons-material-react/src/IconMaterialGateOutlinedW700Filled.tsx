import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGateOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GateOutlinedW700Filled'
      short_name='Gate'

      {...props}
    >
      <path d="M.225 18V6H3v12ZM21 18V6h2.775v12ZM4 20.3V8.55q0-2 1.425-3.425Q6.85 3.7 8.85 3.7H11V11H8.3v2H11v7.3Zm9 0V13h2.7v-2H13V3.7h2.15q2 0 3.425 1.425Q20 6.55 20 8.55V20.3Z"/>
    </Icon>
  )
});

export default IconMaterialGateOutlinedW700Filled;
