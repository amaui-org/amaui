import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMissedRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedRounded'
      short_name='CallMissed'

      {...props}
    >
      <path d="M12 17Q11.8 17 11.625 16.938Q11.45 16.875 11.3 16.725L5 10.425V14Q5 14.425 4.713 14.712Q4.425 15 4 15Q3.575 15 3.288 14.712Q3 14.425 3 14V8Q3 7.575 3.288 7.287Q3.575 7 4 7H10Q10.425 7 10.713 7.287Q11 7.575 11 8Q11 8.425 10.713 8.712Q10.425 9 10 9H6.4L12 14.6L18.9 7.7Q19.175 7.425 19.6 7.412Q20.025 7.4 20.3 7.7Q20.6 7.975 20.6 8.4Q20.6 8.825 20.3 9.125L12.7 16.725Q12.55 16.875 12.375 16.938Q12.2 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialCallMissedRounded.displayName = 'AmauiIconMaterialCallMissedRounded';

export default IconMaterialCallMissedRounded;
