import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatErrorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatErrorW100'

      short_name='ChatError'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 876V228h696v536H244L132 876Zm100-140h568V256H160v552l72-72Zm-72 0V256v480Zm216-117 104-103 104 103 19-19-103-104 103-104-19-19-104 103-104-103-19 19 103 104-103 104 19 19Z"/>
    </Icon>
  );
});

IconMaterialChatErrorW100.displayName = 'AmauiIconMaterialChatErrorW100';

export default IconMaterialChatErrorW100;
