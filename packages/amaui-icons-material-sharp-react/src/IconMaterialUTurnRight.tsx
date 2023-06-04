import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUTurnRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UTurnRight'

      short_name='UTurnRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21V9q0-2.5 1.75-4.25T12 3q2.5 0 4.25 1.75T18 9v4.175l1.6-1.575L21 13l-4 4-4-4 1.4-1.425 1.6 1.6V9q0-1.65-1.175-2.825Q13.65 5 12 5q-1.65 0-2.825 1.175Q8 7.35 8 9v12Z"/>
    </Icon>
  );
});

IconMaterialUTurnRight.displayName = 'AmauiIconMaterialUTurnRight';

export default IconMaterialUTurnRight;
