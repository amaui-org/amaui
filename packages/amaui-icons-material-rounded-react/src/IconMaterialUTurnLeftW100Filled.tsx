import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUTurnLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UTurnLeftW100Filled'

      short_name='UTurnLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 20.35q-.15 0-.25-.1t-.1-.25V9q0-1.925-1.362-3.288Q13.925 4.35 12 4.35q-1.925 0-3.287 1.362Q7.35 7.075 7.35 9v5.725l1.975-1.975q.1-.1.237-.1.138 0 .263.1.125.125.125.25t-.125.25l-2.3 2.3q-.125.125-.25.175-.125.05-.275.05-.15 0-.275-.05-.125-.05-.25-.175l-2.3-2.3q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l1.975 1.975V9q0-2.225 1.563-3.788Q9.775 3.65 12 3.65q2.225 0 3.788 1.562Q17.35 6.775 17.35 9v11q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialUTurnLeftW100Filled.displayName = 'AmauiIconMaterialUTurnLeftW100Filled';

export default IconMaterialUTurnLeftW100Filled;
