import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeUpAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeUpAltW100Filled'

      short_name='SwipeUpAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.35q-1.8 0-3.075-1.275Q7.65 16.8 7.65 15q0-1.725 1.138-2.938 1.137-1.212 2.862-1.387v-6.4l-2 2q-.125.125-.25.125t-.25-.125q-.1-.125-.112-.25-.013-.125.112-.25l2.325-2.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l2.325 2.325q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125l-2-2v6.4q1.725.175 2.863 1.387Q16.35 13.275 16.35 15q0 1.8-1.275 3.075Q13.8 19.35 12 19.35Z"/>
    </Icon>
  );
});

IconMaterialSwipeUpAltW100Filled.displayName = 'AmauiIconMaterialSwipeUpAltW100Filled';

export default IconMaterialSwipeUpAltW100Filled;
