import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmsFailedSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmsFailedSharpFilled'
      short_name='SmsFailed'

      {...props}
    >
      <path d="M11 11H13V5H11ZM12 15Q12.425 15 12.713 14.712Q13 14.425 13 14Q13 13.575 12.713 13.287Q12.425 13 12 13Q11.575 13 11.288 13.287Q11 13.575 11 14Q11 14.425 11.288 14.712Q11.575 15 12 15ZM2 22V2H22V18H6Z"/>
    </Icon>
  );
});

IconMaterialSmsFailedSharpFilled.displayName = 'AmauiIconMaterialSmsFailedSharpFilled';

export default IconMaterialSmsFailedSharpFilled;
