import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendRoundedFilled'
      short_name='Send'

      {...props}
    >
      <path d="M4.4 19.425Q3.9 19.625 3.45 19.337Q3 19.05 3 18.5V14.775Q3 14.425 3.2 14.15Q3.4 13.875 3.75 13.8L11 12L3.75 10.2Q3.4 10.125 3.2 9.85Q3 9.575 3 9.225V5.5Q3 4.95 3.45 4.662Q3.9 4.375 4.4 4.575L19.8 11.075Q20.425 11.35 20.425 12Q20.425 12.65 19.8 12.925Z"/>
    </Icon>
  );
});

IconMaterialSendRoundedFilled.displayName = 'AmauiIconMaterialSendRoundedFilled';

export default IconMaterialSendRoundedFilled;
