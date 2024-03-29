import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimerOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerOffFilled'

      short_name='TimerOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.975 17.15-6.95-6.95V9q0-.425-.287-.713Q12.45 8 12.025 8q-.275 0-.475.125-.2.125-.325.275l-3.35-3.35q.95-.5 2-.775T12.025 4q1.5 0 2.938.5 1.437.5 2.712 1.45l.725-.725q.275-.275.675-.275t.7.3q.275.275.275.7 0 .425-.275.7l-.7.7q.95 1.275 1.45 2.712.5 1.438.5 2.938 0 1.05-.262 2.087-.263 1.038-.788 2.063ZM12.025 22q-1.85 0-3.487-.712-1.638-.713-2.863-1.938t-1.937-2.862Q3.025 14.85 3.025 13q0-1.5.463-2.887Q3.95 8.725 4.825 7.6L2.1 4.875Q1.825 4.6 1.825 4.2t.3-.7q.275-.275.7-.275.425 0 .7.275L20.55 20.525q.275.275.275.675t-.3.7q-.275.275-.7.275-.425 0-.7-.275l-1.7-1.7q-1.2.875-2.587 1.338Q13.45 22 12.025 22Zm-2-19q-.425 0-.713-.288-.287-.287-.287-.712t.287-.713Q9.6 1 10.025 1h4q.425 0 .713.287.287.288.287.713t-.287.712Q14.45 3 14.025 3Z"/>
    </Icon>
  );
});

IconMaterialTimerOffFilled.displayName = 'AmauiIconMaterialTimerOffFilled';

export default IconMaterialTimerOffFilled;
