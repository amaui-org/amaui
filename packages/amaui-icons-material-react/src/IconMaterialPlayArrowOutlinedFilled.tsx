import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayArrowOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrowOutlinedFilled'
      short_name='PlayArrow'

      {...props}
    >
      <path d="M8 19V5L19 12Z"/>
    </Icon>
  )
});

export default IconMaterialPlayArrowOutlinedFilled;
