import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendRounded'
      short_name='Send'

      {...props}
    >
      <path d="M3 18.5V5.5Q3 4.95 3.45 4.662Q3.9 4.375 4.4 4.575L19.8 11.075Q20.425 11.35 20.425 12Q20.425 12.65 19.8 12.925L4.4 19.425Q3.9 19.625 3.45 19.337Q3 19.05 3 18.5ZM5 17 16.85 12 5 7V10.5L11 12L5 13.5ZM5 12V7V10.5Q5 10.5 5 10.5Q5 10.5 5 10.5V13.5Q5 13.5 5 13.5Q5 13.5 5 13.5V17Z"/>
    </Icon>
  );
});

IconMaterialSendRounded.displayName = 'AmauiIconMaterialSendRounded';

export default IconMaterialSendRounded;
