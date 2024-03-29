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
      <path d="M7 21q-.425 0-.713-.288Q6 20.425 6 20V9q0-2.5 1.75-4.25T12 3q2.5 0 4.25 1.75T18 9v4.175l.9-.9q.275-.275.687-.275.413 0 .713.3.275.275.275.7 0 .425-.275.7l-2.6 2.6q-.15.15-.325.212-.175.063-.375.063t-.375-.063q-.175-.062-.325-.212l-2.6-2.6q-.275-.275-.275-.688 0-.412.275-.712.3-.3.713-.3.412 0 .712.3l.875.875V9q0-1.65-1.175-2.825Q13.65 5 12 5q-1.65 0-2.825 1.175Q8 7.35 8 9v11q0 .425-.287.712Q7.425 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialUTurnRight.displayName = 'AmauiIconMaterialUTurnRight';

export default IconMaterialUTurnRight;
