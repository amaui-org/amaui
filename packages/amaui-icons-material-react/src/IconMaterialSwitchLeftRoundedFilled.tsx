import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchLeftRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchLeftRoundedFilled'
      short_name='SwitchLeft'

      {...props}
    >
      <path d="M8.5 15.375V8.625L5.125 12ZM8.3 17.3 3.7 12.7Q3.55 12.55 3.488 12.375Q3.425 12.2 3.425 12Q3.425 11.8 3.488 11.625Q3.55 11.45 3.7 11.3L8.3 6.7Q8.775 6.225 9.387 6.487Q10 6.75 10 7.425V16.575Q10 17.25 9.387 17.512Q8.775 17.775 8.3 17.3ZM15.7 17.3Q15.225 17.775 14.613 17.512Q14 17.25 14 16.575V7.425Q14 6.75 14.613 6.487Q15.225 6.225 15.7 6.7L20.3 11.3Q20.45 11.45 20.513 11.625Q20.575 11.8 20.575 12Q20.575 12.2 20.513 12.375Q20.45 12.55 20.3 12.7Z"/>
    </Icon>
  );
});

IconMaterialSwitchLeftRoundedFilled.displayName = 'AmauiIconMaterialSwitchLeftRoundedFilled';

export default IconMaterialSwitchLeftRoundedFilled;
