import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwapCallsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapCallsW100'

      short_name='SwapCalls'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 18.35q-1.4 0-2.375-.975Q11.65 16.4 11.65 15V8q0-1.125-.763-1.888Q10.125 5.35 9 5.35t-1.887.762Q6.35 6.875 6.35 8v9l2.025-2.025q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-2.325 2.325q-.125.125-.25.175-.125.05-.275.05-.15 0-.275-.05-.125-.05-.25-.175l-2.35-2.35q-.1-.1-.1-.225T3.15 15q.125-.125.25-.125t.25.125l2 2V8q0-1.4.975-2.375Q7.6 4.65 9 4.65t2.375.975Q12.35 6.6 12.35 8v7q0 1.125.763 1.887.762.763 1.887.763t1.888-.763q.762-.762.762-1.887V6l-2.025 2.025q-.1.1-.225.1T15.15 8q-.125-.125-.125-.25t.125-.25l2.325-2.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l2.35 2.35q.1.1.1.225T20.85 8q-.125.125-.25.125T20.35 8l-2-2v9q0 1.4-.975 2.375-.975.975-2.375.975Z"/>
    </Icon>
  );
});

IconMaterialSwapCallsW100.displayName = 'AmauiIconMaterialSwapCallsW100';

export default IconMaterialSwapCallsW100;
