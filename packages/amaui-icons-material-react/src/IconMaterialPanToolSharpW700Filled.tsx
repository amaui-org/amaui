import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanToolSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolSharpW700Filled'
      short_name='PanTool'

      {...props}
    >
      <path d="M8.85 24 0.225 15.075 2.975 12.525 7.225 14.925V2.475H10.4V11.375H11.4V0H14.6V11.375H15.6V0.925H18.8V11.375H19.8V3.725H22.975V24Z"/>
    </Icon>
  )
});

export default IconMaterialPanToolSharpW700Filled;
