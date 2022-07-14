import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrailLengthShortRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthShortRoundedW100Filled'
      short_name='TrailLengthShort'

      {...props}
    >
      <path d="M15 16.35q-1.725 0-2.95-1.137-1.225-1.138-1.4-2.863h-6v-.7h6q.075-.875.563-1.788.487-.912 1.412-1.512H6.65v-.7H15q1.8 0 3.075 1.275Q19.35 10.2 19.35 12q0 1.8-1.275 3.075Q16.8 16.35 15 16.35Zm-7.35 0v-.7h1.7v.7Z"/>
    </Icon>
  );
});

export default IconMaterialTrailLengthShortRoundedW100Filled;
