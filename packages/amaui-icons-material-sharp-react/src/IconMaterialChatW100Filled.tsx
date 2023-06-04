import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatW100Filled'

      short_name='Chat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 13.35h6.7v-.7h-6.7Zm0-3h10.7v-.7H6.65Zm0-3h10.7v-.7H6.65ZM3.3 19.5V3.3h17.4v13.4H6.1Z"/>
    </Icon>
  );
});

IconMaterialChatW100Filled.displayName = 'AmauiIconMaterialChatW100Filled';

export default IconMaterialChatW100Filled;
