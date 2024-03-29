import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer'

      short_name='Timer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 3q-.425 0-.712-.288Q9 2.425 9 2t.288-.713Q9.575 1 10 1h4q.425 0 .713.287Q15 1.575 15 2t-.287.712Q14.425 3 14 3Zm2 11q.425 0 .713-.288Q13 13.425 13 13V9q0-.425-.287-.713Q12.425 8 12 8t-.712.287Q11 8.575 11 9v4q0 .425.288.712.287.288.712.288Zm0 8q-1.85 0-3.488-.712-1.637-.713-2.862-1.938t-1.938-2.862Q3 14.85 3 13t.712-3.488Q4.425 7.875 5.65 6.65t2.862-1.937Q10.15 4 12 4q1.55 0 2.975.5t2.675 1.45l.725-.725q.275-.275.675-.275t.7.3q.275.275.275.7 0 .425-.275.7l-.7.7Q20 8.6 20.5 10.025 21 11.45 21 13q0 1.85-.712 3.488-.713 1.637-1.938 2.862t-2.862 1.938Q13.85 22 12 22Zm0-2q2.9 0 4.95-2.05Q19 15.9 19 13q0-2.9-2.05-4.95Q14.9 6 12 6 9.1 6 7.05 8.05 5 10.1 5 13q0 2.9 2.05 4.95Q9.1 20 12 20Zm0-7Z"/>
    </Icon>
  );
});

IconMaterialTimer.displayName = 'AmauiIconMaterialTimer';

export default IconMaterialTimer;
