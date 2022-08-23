import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAllInboxSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInboxSharpW100Filled'
      short_name='AllInbox'

      {...props}
    >
      <path d="M13.35 13.8Q14.275 13.8 14.975 13.237Q15.675 12.675 15.675 11.8H19.35V4H7.35V11.8H11.025Q11.025 12.675 11.725 13.237Q12.425 13.8 13.35 13.8ZM6.65 16.7V3.3H20.05V16.7ZM3.95 19.4V6.8H4.65V18.7H16.55V19.4Z"/>
    </Icon>
  );
});

IconMaterialAllInboxSharpW100Filled.displayName = 'AmauiIconMaterialAllInboxSharpW100Filled';

export default IconMaterialAllInboxSharpW100Filled;
