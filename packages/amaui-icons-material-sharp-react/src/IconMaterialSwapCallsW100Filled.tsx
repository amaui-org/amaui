import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwapCallsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapCallsW100Filled'

      short_name='SwapCalls'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6 18.35-3.1-3.1.5-.5L5.65 17V8q0-1.4.975-2.375Q7.6 4.65 9 4.65t2.375.975Q12.35 6.6 12.35 8v7q0 1.125.763 1.887.762.763 1.887.763t1.888-.763q.762-.762.762-1.887V6L15.4 8.25l-.5-.5 3.1-3.1 3.1 3.1-.5.5L18.35 6v9q0 1.4-.975 2.375-.975.975-2.375.975t-2.375-.975Q11.65 16.4 11.65 15V8q0-1.125-.763-1.888Q10.125 5.35 9 5.35t-1.887.762Q6.35 6.875 6.35 8v9l2.25-2.25.5.5Z"/>
    </Icon>
  );
});

IconMaterialSwapCallsW100Filled.displayName = 'AmauiIconMaterialSwapCallsW100Filled';

export default IconMaterialSwapCallsW100Filled;
