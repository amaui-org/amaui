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
      <path d="M16.65 20.35V9q0-1.925-1.362-3.288Q13.925 4.35 12 4.35q-1.925 0-3.287 1.362Q7.35 7.075 7.35 9v5.725L9.575 12.5l.5.5L7 16.075 3.925 13l.5-.5 2.225 2.225V9q0-2.225 1.563-3.788Q9.775 3.65 12 3.65q2.225 0 3.788 1.562Q17.35 6.775 17.35 9v11.35Z"/>
    </Icon>
  );
});

IconMaterialUTurnLeftW100Filled.displayName = 'AmauiIconMaterialUTurnLeftW100Filled';

export default IconMaterialUTurnLeftW100Filled;
