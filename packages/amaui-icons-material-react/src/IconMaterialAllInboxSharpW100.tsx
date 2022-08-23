import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAllInboxSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInboxSharpW100'
      short_name='AllInbox'

      {...props}
    >
      <path d="M7.35 16H19.35V12.5H16.25Q15.975 13.45 15.163 13.975Q14.35 14.5 13.35 14.5Q12.35 14.5 11.538 13.975Q10.725 13.45 10.45 12.5H7.35ZM13.35 13.8Q14.275 13.8 14.975 13.237Q15.675 12.675 15.675 11.8H19.35V4H7.35V11.8H11.025Q11.025 12.675 11.725 13.237Q12.425 13.8 13.35 13.8ZM6.65 16.7V3.3H20.05V16.7ZM3.95 19.4V6.8H4.65V18.7H16.55V19.4ZM7.35 16H10.45Q10.725 16 11.538 16Q12.35 16 13.35 16Q14.35 16 15.163 16Q15.975 16 16.25 16H19.35Z"/>
    </Icon>
  );
});

IconMaterialAllInboxSharpW100.displayName = 'AmauiIconMaterialAllInboxSharpW100';

export default IconMaterialAllInboxSharpW100;
