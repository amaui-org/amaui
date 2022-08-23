import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSnoozeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnoozeSharpW100Filled'
      short_name='Snooze'

      {...props}
    >
      <path d="M9.9 15.6H14.1V14.9H10.8L14.1 11.2V10.4H9.9V11.1H13.25L9.9 14.85ZM12 20.7Q10.4 20.7 9 20.1Q7.6 19.5 6.55 18.45Q5.5 17.4 4.9 16Q4.3 14.6 4.3 13Q4.3 11.4 4.9 10Q5.5 8.6 6.55 7.55Q7.6 6.5 9 5.9Q10.4 5.3 12 5.3Q13.6 5.3 15 5.9Q16.4 6.5 17.45 7.55Q18.5 8.6 19.1 10Q19.7 11.4 19.7 13Q19.7 14.6 19.1 16Q18.5 17.4 17.45 18.45Q16.4 19.5 15 20.1Q13.6 20.7 12 20.7ZM6 3.75 6.5 4.25 3.25 7.5 2.75 7ZM18 3.75 21.25 7 20.75 7.5 17.5 4.25Z"/>
    </Icon>
  );
});

IconMaterialSnoozeSharpW100Filled.displayName = 'AmauiIconMaterialSnoozeSharpW100Filled';

export default IconMaterialSnoozeSharpW100Filled;
