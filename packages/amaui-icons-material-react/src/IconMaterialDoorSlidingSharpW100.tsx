import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorSlidingSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSlidingSharpW100'
      short_name='DoorSliding'

      {...props}
    >
      <path d="M9.95 12.7Q9.675 12.7 9.463 12.487Q9.25 12.275 9.25 12Q9.25 11.725 9.463 11.512Q9.675 11.3 9.95 11.3Q10.225 11.3 10.438 11.512Q10.65 11.725 10.65 12Q10.65 12.275 10.438 12.487Q10.225 12.7 9.95 12.7ZM14.05 12.7Q13.775 12.7 13.562 12.487Q13.35 12.275 13.35 12Q13.35 11.725 13.562 11.512Q13.775 11.3 14.05 11.3Q14.325 11.3 14.538 11.512Q14.75 11.725 14.75 12Q14.75 12.275 14.538 12.487Q14.325 12.7 14.05 12.7ZM4.95 19.7V19H5.95V4.3H18.05V19H19.05V19.7ZM6.65 19H11.65V5H6.65ZM12.35 19H17.35V5H12.35ZM12 11.65Z"/>
    </Icon>
  );
});

IconMaterialDoorSlidingSharpW100.displayName = 'AmauiIconMaterialDoorSlidingSharpW100';

export default IconMaterialDoorSlidingSharpW100;
