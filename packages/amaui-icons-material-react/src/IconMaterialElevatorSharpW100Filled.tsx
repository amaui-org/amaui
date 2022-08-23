import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialElevatorSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElevatorSharpW100Filled'
      short_name='Elevator'

      {...props}
    >
      <path d="M8.15 17.35H9.85V13.6H10.85V9.65H7.15V13.6H8.15ZM9 8.75Q9.425 8.75 9.713 8.462Q10 8.175 10 7.75Q10 7.325 9.713 7.037Q9.425 6.75 9 6.75Q8.575 6.75 8.288 7.037Q8 7.325 8 7.75Q8 8.175 8.288 8.462Q8.575 8.75 9 8.75ZM13.925 10.35H16.575L15.25 8.225ZM15.25 15.775 16.575 13.65H13.925ZM4.3 19.7V4.3H19.7V19.7Z"/>
    </Icon>
  );
});

IconMaterialElevatorSharpW100Filled.displayName = 'AmauiIconMaterialElevatorSharpW100Filled';

export default IconMaterialElevatorSharpW100Filled;
