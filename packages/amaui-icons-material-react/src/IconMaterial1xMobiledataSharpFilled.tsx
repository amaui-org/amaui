import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial1xMobiledataSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='1xMobiledataSharpFilled'
      short_name='1xMobiledata'

      {...props}
    >
      <path d="M6 17V9H4V7H8V17ZM10.35 17 13.5 11.7 10.65 7H13L14.65 9.75L16.35 7H18.65L15.85 11.7L19 17H16.65L14.65 13.65L12.65 17Z"/>
    </Icon>
  );
});

export default IconMaterial1xMobiledataSharpFilled;
