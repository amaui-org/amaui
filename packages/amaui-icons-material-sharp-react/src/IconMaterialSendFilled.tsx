import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendFilled'

      short_name='Send'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20v-6l8-2-8-2V4l19 8Z"/>
    </Icon>
  );
});

IconMaterialSendFilled.displayName = 'AmauiIconMaterialSendFilled';

export default IconMaterialSendFilled;
