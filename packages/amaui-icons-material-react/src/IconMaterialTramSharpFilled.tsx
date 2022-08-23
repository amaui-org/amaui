import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTramSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TramSharpFilled'
      short_name='Tram'

      {...props}
    >
      <path d="M4 17.5V8Q4 5.575 6.125 4.825Q8.25 4.075 11 4L11.75 2.5H7V1H17V2.5H13.75L13 4Q15.975 4.075 17.988 4.812Q20 5.55 20 8V17.5Q20 18.975 18.988 19.988Q17.975 21 16.5 21L18 22.5V23H16L14 21H10L8 23H6V22.5L7.5 21Q6.025 21 5.013 19.988Q4 18.975 4 17.5ZM12 18Q12.625 18 13.062 17.562Q13.5 17.125 13.5 16.5Q13.5 15.875 13.062 15.438Q12.625 15 12 15Q11.375 15 10.938 15.438Q10.5 15.875 10.5 16.5Q10.5 17.125 10.938 17.562Q11.375 18 12 18ZM6 12H18V9H6Z"/>
    </Icon>
  );
});

IconMaterialTramSharpFilled.displayName = 'AmauiIconMaterialTramSharpFilled';

export default IconMaterialTramSharpFilled;
