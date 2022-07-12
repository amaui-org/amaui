import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbUpSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpSharpW700Filled'
      short_name='ThumbUp'

      {...props}
    >
      <path d="M6.5 21.5V7.85L14.125 0.9L16.65 3.3L15.6 7.55H24.5V11.125L20.125 21.5ZM-0.275 21.5H4.5V9.275H-0.275Z"/>
    </Icon>
  )
});

export default IconMaterialThumbUpSharpW700Filled;
