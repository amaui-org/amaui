import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUTurnRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UTurnRightW100Filled'

      short_name='UTurnRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.025 20.35q-.15 0-.25-.1t-.1-.25V9q0-2.225 1.563-3.788Q9.8 3.65 12.025 3.65q2.225 0 3.787 1.562Q17.375 6.775 17.375 9v5.725l1.975-1.975q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-2.3 2.3q-.125.125-.25.175-.125.05-.275.05-.15 0-.275-.05-.125-.05-.25-.175l-2.3-2.3q-.125-.125-.125-.25t.125-.25q.125-.1.25-.113.125-.012.25.113l1.975 1.975V9q0-1.925-1.363-3.288Q13.95 4.35 12.025 4.35q-1.925 0-3.287 1.362Q7.375 7.075 7.375 9v11q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialUTurnRightW100Filled.displayName = 'AmauiIconMaterialUTurnRightW100Filled';

export default IconMaterialUTurnRightW100Filled;
