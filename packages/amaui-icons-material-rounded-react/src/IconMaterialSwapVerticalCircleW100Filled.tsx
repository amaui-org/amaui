import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwapVerticalCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapVerticalCircleW100Filled'

      short_name='SwapVerticalCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 11q-.15 0-.25.1t-.1.25v4.5l-2.025-2.025q-.1-.1-.225-.1t-.25.125q-.125.125-.125.25t.125.25l2.325 2.325q.225.225.525.225.3 0 .525-.225l2.35-2.35q.1-.1.1-.225t-.125-.25q-.125-.125-.25-.125t-.25.125l-2 2v-4.525q0-.125-.1-.225T14 11Zm-4 2q.15 0 .25-.1t.1-.25v-4.5l2.025 2.025q.1.1.225.1t.25-.125q.125-.125.125-.25t-.125-.25l-2.325-2.325Q10.3 7.1 10 7.1q-.3 0-.525.225l-2.35 2.35q-.1.1-.1.225t.125.25q.125.125.25.125t.25-.125l2-2v4.525q0 .125.1.225t.25.1Zm2 7.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialSwapVerticalCircleW100Filled.displayName = 'AmauiIconMaterialSwapVerticalCircleW100Filled';

export default IconMaterialSwapVerticalCircleW100Filled;
