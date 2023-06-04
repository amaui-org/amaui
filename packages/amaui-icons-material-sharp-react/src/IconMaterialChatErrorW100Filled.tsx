import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatErrorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatErrorW100Filled'

      short_name='ChatError'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 876V228h696v536H244L132 876Zm244-257 104-103 104 103 19-19-103-104 103-104-19-19-104 103-104-103-19 19 103 104-103 104 19 19Z"/>
    </Icon>
  );
});

IconMaterialChatErrorW100Filled.displayName = 'AmauiIconMaterialChatErrorW100Filled';

export default IconMaterialChatErrorW100Filled;
