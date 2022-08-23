import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialElevatorSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElevatorSharpFilled'
      short_name='Elevator'

      {...props}
    >
      <path d="M7 18H10V14H11V9.5H6V14H7ZM8.5 8.5Q9.025 8.5 9.387 8.137Q9.75 7.775 9.75 7.25Q9.75 6.725 9.387 6.362Q9.025 6 8.5 6Q7.975 6 7.613 6.362Q7.25 6.725 7.25 7.25Q7.25 7.775 7.613 8.137Q7.975 8.5 8.5 8.5ZM13 11H18L15.5 7ZM15.5 17 18 13H13ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

IconMaterialElevatorSharpFilled.displayName = 'AmauiIconMaterialElevatorSharpFilled';

export default IconMaterialElevatorSharpFilled;
