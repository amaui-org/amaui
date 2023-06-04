import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwapHorizontalCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHorizontalCircleW100Filled'

      short_name='SwapHorizontalCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.35 12.85 2.325-2.325Q16.9 10.3 16.9 10q0-.3-.225-.525l-2.35-2.35q-.1-.1-.225-.1t-.25.125q-.125.125-.125.25t.125.25l2 2h-4.525q-.125 0-.225.1T11 10q0 .15.1.25t.25.1h4.5l-2.025 2.025q-.1.1-.1.225t.125.25q.125.125.25.125t.25-.125Zm-4.675 4.025q.1.1.225.1t.25-.125q.125-.125.125-.25t-.125-.25l-2-2h4.525q.125 0 .225-.1T13 14q0-.15-.1-.25t-.25-.1h-4.5l2.025-2.025q.1-.1.1-.225t-.125-.25q-.125-.125-.25-.125t-.25.125l-2.325 2.325Q7.1 13.7 7.1 14q0 .3.225.525ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialSwapHorizontalCircleW100Filled.displayName = 'AmauiIconMaterialSwapHorizontalCircleW100Filled';

export default IconMaterialSwapHorizontalCircleW100Filled;
