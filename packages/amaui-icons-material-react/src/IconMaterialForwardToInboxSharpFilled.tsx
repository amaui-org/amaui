import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForwardToInboxSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInboxSharpFilled'
      short_name='ForwardToInbox'

      {...props}
    >
      <path d="M19 23 17.6 21.6 19.175 20H15V18H19.175L17.575 16.4L19 15L23 19ZM2 20V4H22V13.8Q21.325 13.4 20.562 13.2Q19.8 13 19 13Q16.5 13 14.75 14.75Q13 16.5 13 19V20ZM12 13 20 8V6L12 11L4 6V8Z"/>
    </Icon>
  );
});

IconMaterialForwardToInboxSharpFilled.displayName = 'AmauiIconMaterialForwardToInboxSharpFilled';

export default IconMaterialForwardToInboxSharpFilled;
