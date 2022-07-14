import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsFlatHeadRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsFlatHeadRoundedW100Filled'
      short_name='ToolsFlatHead'

      {...props}
    >
      <path d="M9.125 19.7V19h5.75v.7Zm0-1.7-.8-5.625 1.7-6.775h3.95l1.7 6.775-.8 5.625Zm.025-6.05h5.7l-1.4-5.65h-2.9Z"/>
    </Icon>
  );
});

export default IconMaterialToolsFlatHeadRoundedW100Filled;
