import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddTaskSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddTaskSharpFilled'
      short_name='AddTask'

      {...props}
    >
      <path d="M19 20V17H16V15H19V12H21V15H24V17H21V20ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q13.625 2 15.075 2.475Q16.525 2.95 17.75 3.8L16.3 5.275Q15.35 4.675 14.275 4.337Q13.2 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Q12.8 20 13.55 19.85Q14.3 19.7 15 19.425L16.5 20.95Q15.475 21.45 14.35 21.725Q13.225 22 12 22ZM10.6 16.6 6.35 12.35 7.75 10.95 10.6 13.8 20.6 3.775 22 5.175Z"/>
    </Icon>
  );
});

IconMaterialAddTaskSharpFilled.displayName = 'AmauiIconMaterialAddTaskSharpFilled';

export default IconMaterialAddTaskSharpFilled;
