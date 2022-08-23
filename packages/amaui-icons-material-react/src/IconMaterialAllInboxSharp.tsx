import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAllInboxSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInboxSharp'
      short_name='AllInbox'

      {...props}
    >
      <path d="M8 16H20V13H17.45Q16.925 13.925 16 14.462Q15.075 15 14 15Q12.95 15 12.025 14.462Q11.1 13.925 10.55 13H8ZM14 13Q14.85 13 15.425 12.412Q16 11.825 16 11H20V4H8V11H12Q12 11.825 12.588 12.412Q13.175 13 14 13ZM6 18V2H22V18ZM2 22V6H4V20H18V22ZM8 16H10.55Q11.1 16 12.025 16Q12.95 16 14 16Q15.075 16 16 16Q16.925 16 17.45 16H20Z"/>
    </Icon>
  );
});

IconMaterialAllInboxSharp.displayName = 'AmauiIconMaterialAllInboxSharp';

export default IconMaterialAllInboxSharp;
