import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsFlatHeadRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsFlatHeadRoundedW700Filled'
      short_name='ToolsFlatHead'

      {...props}
    >
      <path d="M7.425 22.325v-3.15h9.15v3.15ZM7.45 18.2l-1.075-7.975 2.125-8.6h6.975l2.15 8.6L16.55 18.2Zm2.225-8.775h4.65L13.15 4.65h-2.275Z"/>
    </Icon>
  )
});

export default IconMaterialToolsFlatHeadRoundedW700Filled;
