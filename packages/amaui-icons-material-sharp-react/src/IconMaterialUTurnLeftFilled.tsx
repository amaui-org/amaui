import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUTurnLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UTurnLeftFilled'

      short_name='UTurnLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 21V9q0-1.65-1.175-2.825Q13.65 5 12 5q-1.65 0-2.825 1.175Q8 7.35 8 9v4.2l1.6-1.6L11 13l-4 4-4-4 1.4-1.4L6 13.2V9q0-2.5 1.75-4.25T12 3q2.5 0 4.25 1.75T18 9v12Z"/>
    </Icon>
  );
});

IconMaterialUTurnLeftFilled.displayName = 'AmauiIconMaterialUTurnLeftFilled';

export default IconMaterialUTurnLeftFilled;
