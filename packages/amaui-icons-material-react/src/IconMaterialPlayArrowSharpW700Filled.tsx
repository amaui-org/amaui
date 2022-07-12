import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayArrowSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrowSharpW700Filled'
      short_name='PlayArrow'

      {...props}
    >
      <path d="M7.15 20.525V3.475L20.575 12Z"/>
    </Icon>
  )
});

export default IconMaterialPlayArrowSharpW700Filled;
