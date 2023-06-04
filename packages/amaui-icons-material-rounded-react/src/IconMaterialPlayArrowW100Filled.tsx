import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayArrowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrowW100Filled'

      short_name='PlayArrow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.45 15.925q-.375.25-.762.025-.388-.225-.388-.675v-6.55q0-.45.388-.675.387-.225.762.025l5.15 3.3q.35.225.35.625t-.35.625Z"/>
    </Icon>
  );
});

IconMaterialPlayArrowW100Filled.displayName = 'AmauiIconMaterialPlayArrowW100Filled';

export default IconMaterialPlayArrowW100Filled;
