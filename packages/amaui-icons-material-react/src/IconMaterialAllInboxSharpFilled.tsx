import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAllInboxSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInboxSharpFilled'
      short_name='AllInbox'

      {...props}
    >
      <path d="M14 13Q14.85 13 15.425 12.412Q16 11.825 16 11H20V4H8V11H12Q12 11.825 12.588 12.412Q13.175 13 14 13ZM6 18V2H22V18ZM2 22V6H4V20H18V22Z"/>
    </Icon>
  )
});

export default IconMaterialAllInboxSharpFilled;
