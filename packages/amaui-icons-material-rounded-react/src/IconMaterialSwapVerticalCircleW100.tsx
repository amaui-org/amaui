import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwapVerticalCircleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapVerticalCircleW100'

      short_name='SwapVerticalCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 11q-.15 0-.25.1t-.1.25v4.5l-2.025-2.025q-.1-.1-.238-.087-.137.012-.237.112-.125.125-.125.25t.125.25l2.325 2.325q.225.225.525.225.3 0 .525-.225l2.35-2.35q.1-.1.087-.238-.012-.137-.112-.237-.125-.125-.25-.125t-.25.125l-2 2v-4.525q0-.125-.1-.225T14 11Zm-4 2q.15 0 .25-.1t.1-.25v-4.5l2.025 2.025q.1.1.238.087.137-.012.237-.112.125-.125.125-.25t-.125-.25l-2.325-2.325Q10.3 7.1 10 7.1q-.3 0-.525.225l-2.35 2.35q-.1.1-.087.237.012.138.112.238.125.125.25.125t.25-.125l2-2v4.525q0 .125.1.225t.25.1Zm2 7.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-8.7Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialSwapVerticalCircleW100.displayName = 'AmauiIconMaterialSwapVerticalCircleW100';

export default IconMaterialSwapVerticalCircleW100;
