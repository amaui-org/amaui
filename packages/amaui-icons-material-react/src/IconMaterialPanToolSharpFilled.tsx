import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanToolSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolSharpFilled'
      short_name='PanTool'

      {...props}
    >
      <path d="M10.025 24 1 14.825 2.9 13 8 15.9V3H11V11H12V0H15V11H16V1H19V11H20V4H23V24Z"/>
    </Icon>
  );
});

export default IconMaterialPanToolSharpFilled;
