import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUTurnLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UTurnLeft'

      short_name='UTurnLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 21q-.425 0-.712-.288Q16 20.425 16 20V9q0-1.65-1.175-2.825Q13.65 5 12 5q-1.65 0-2.825 1.175Q8 7.35 8 9v4.2l.9-.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-2.6 2.6q-.15.15-.325.212-.175.063-.375.063t-.375-.063Q6.45 16.45 6.3 16.3l-2.6-2.6q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l.9.9V9q0-2.5 1.75-4.25T12 3q2.5 0 4.25 1.75T18 9v11q0 .425-.288.712Q17.425 21 17 21Z"/>
    </Icon>
  );
});

IconMaterialUTurnLeft.displayName = 'AmauiIconMaterialUTurnLeft';

export default IconMaterialUTurnLeft;
