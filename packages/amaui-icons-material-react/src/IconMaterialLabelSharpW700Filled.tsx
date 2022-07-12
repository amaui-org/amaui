import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelSharpW700Filled'
      short_name='Label'

      {...props}
    >
      <path d="M2.05 19.85V4.15H16.375L21.95 12L16.375 19.85Z"/>
    </Icon>
  )
});

export default IconMaterialLabelSharpW700Filled;
