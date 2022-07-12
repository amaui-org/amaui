import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayArrowOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrowOutlinedW100Filled'
      short_name='PlayArrow'

      {...props}
    >
      <path d="M9.3 16.65V7.35L16.6 12Z"/>
    </Icon>
  )
});

export default IconMaterialPlayArrowOutlinedW100Filled;
