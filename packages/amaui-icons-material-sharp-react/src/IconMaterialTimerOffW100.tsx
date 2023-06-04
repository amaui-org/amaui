import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimerOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerOffW100'

      short_name='TimerOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19 16.175-.525-.525q.275-.65.4-1.313Q19 13.675 19 13q0-2.9-2.05-4.95Q14.9 6 12 6q-.6 0-1.325.125t-1.325.4L8.825 6q.725-.35 1.55-.525Q11.2 5.3 12 5.3q1.4 0 2.725.512 1.325.513 2.45 1.488l1-1 .5.5-1 1q.975 1.125 1.5 2.462Q19.7 11.6 19.7 13q0 .8-.175 1.625T19 16.175Zm-6.65-6.65V8.5h-.7v.325ZM20 21l-2.55-2.55q-1.025 1.05-2.462 1.65-1.438.6-2.988.6-1.6 0-3-.6t-2.45-1.65Q5.5 17.4 4.9 16q-.6-1.4-.6-3 0-1.55.575-2.95.575-1.4 1.675-2.5L3 4l.5-.5 17 17Zm-8-1q1.35 0 2.638-.538 1.287-.537 2.312-1.512l-9.9-9.9q-.975.975-1.513 2.25Q5 11.575 5 13q0 2.9 2.05 4.95Q9.1 20 12 20ZM9.5 2.35v-.7h5v.7Zm2.325 10.475Zm2.075-1.75Z"/>
    </Icon>
  );
});

IconMaterialTimerOffW100.displayName = 'AmauiIconMaterialTimerOffW100';

export default IconMaterialTimerOffW100;
