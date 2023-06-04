import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatErrorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatErrorFilled'

      short_name='ChatError'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 976V176h800v640H240L80 976Zm296-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Z"/>
    </Icon>
  );
});

IconMaterialChatErrorFilled.displayName = 'AmauiIconMaterialChatErrorFilled';

export default IconMaterialChatErrorFilled;
