import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdrOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOffSharp'
      short_name='HdrOff'

      {...props}
    >
      <path d="M19.5 15 18.6 13H17.5V14.65L16 13.15V9H21V12.9H20.1L21 15ZM17.5 11.5H19.5V10.5H17.5ZM19.8 22.6 1.4 4.2 2.8 2.8 21.2 21.15ZM14.5 11.65 11.85 9H13Q13.6 9 14.05 9.45Q14.5 9.9 14.5 10.5ZM3 15V9H4.5V11H6.5V9H8V15H6.5V12.5H4.5V15ZM9.5 10.9 11 12.4V13.5H12.125Q12.125 13.5 12.125 13.5Q12.125 13.5 12.125 13.5L13.5 14.9Q13.375 14.95 13.25 14.975Q13.125 15 13 15H9.5Z"/>
    </Icon>
  );
});

IconMaterialHdrOffSharp.displayName = 'AmauiIconMaterialHdrOffSharp';

export default IconMaterialHdrOffSharp;
