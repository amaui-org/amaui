import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForwardToInboxSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInboxSharpW100'
      short_name='ForwardToInbox'

      {...props}
    >
      <path d="M12 11.85 4 6.55V18H13.65V18.35V18.7H3.3V5.3H20.7V13.65Q20.575 13.65 20.388 13.65Q20.2 13.65 20 13.65V6.55ZM12 11 19.6 6H4.4ZM18.5 21.425 18.025 20.95 20.225 18.7H15.15V18H20.25L18 15.75L18.5 15.275L21.575 18.35ZM4 6.55V18V18.575Q4 16.525 4 15.087Q4 13.65 4 13.65Q4 13.65 4 13.688Q4 13.725 4 13.85V6.55V6Z"/>
    </Icon>
  );
});

IconMaterialForwardToInboxSharpW100.displayName = 'AmauiIconMaterialForwardToInboxSharpW100';

export default IconMaterialForwardToInboxSharpW100;
