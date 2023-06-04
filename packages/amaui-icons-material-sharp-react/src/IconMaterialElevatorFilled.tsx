import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElevatorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElevatorFilled'

      short_name='Elevator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 18h3v-4h1V9.5H6V14h1Zm1.5-9.5q.525 0 .887-.363.363-.362.363-.887t-.363-.888Q9.025 6 8.5 6t-.887.362q-.363.363-.363.888t.363.887q.362.363.887.363ZM13 11h5l-2.5-4Zm2.5 6 2.5-4h-5ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialElevatorFilled.displayName = 'AmauiIconMaterialElevatorFilled';

export default IconMaterialElevatorFilled;
