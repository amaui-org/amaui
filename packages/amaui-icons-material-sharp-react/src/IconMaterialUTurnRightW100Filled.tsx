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
      <path d="M6.675 20.35V9q0-2.225 1.563-3.788Q9.8 3.65 12.025 3.65q2.225 0 3.787 1.562Q17.375 6.775 17.375 9v5.725L19.6 12.5l.5.5-3.075 3.075-3.1-3.075.525-.5 2.225 2.225V9q0-1.925-1.363-3.288Q13.95 4.35 12.025 4.35q-1.925 0-3.287 1.362Q7.375 7.075 7.375 9v11.35Z"/>
    </Icon>
  );
});

IconMaterialUTurnRightW100Filled.displayName = 'AmauiIconMaterialUTurnRightW100Filled';

export default IconMaterialUTurnRightW100Filled;
