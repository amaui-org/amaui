import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssistantSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantSharp'
      short_name='Assistant'

      {...props}
    >
      <path d="M12 23 9 20H3V2H21V20H15ZM5 18H9.8L12 20.2L14.2 18H19V4H5ZM5 4V18ZM13.55 12.55 17 11 13.55 9.45 12 6 10.45 9.45 7 11 10.45 12.55 12 16Z"/>
    </Icon>
  );
});

IconMaterialAssistantSharp.displayName = 'AmauiIconMaterialAssistantSharp';

export default IconMaterialAssistantSharp;
