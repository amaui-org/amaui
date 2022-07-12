import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayArrowOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrowOutlinedW700'
      short_name='PlayArrow'

      {...props}
    >
      <path d="M7.15 20.525V3.475L20.575 12ZM10.3 12ZM10.3 14.775 14.675 12 10.3 9.225Z"/>
    </Icon>
  )
});

export default IconMaterialPlayArrowOutlinedW700;
