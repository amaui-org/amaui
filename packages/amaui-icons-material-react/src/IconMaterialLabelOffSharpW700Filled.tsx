import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelOffSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOffSharpW700Filled'
      short_name='LabelOff'

      {...props}
    >
      <path d="M19.85 23.175 16.5 19.85H2.15V5.5L0.325 3.675L2 2L21.5 21.5ZM19.25 15.875 7.55 4.15H16.475L22.025 12Z"/>
    </Icon>
  )
});

export default IconMaterialLabelOffSharpW700Filled;
