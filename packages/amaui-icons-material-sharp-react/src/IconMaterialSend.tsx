import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSend = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Send'

      short_name='Send'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20V4l19 8Zm2-3 11.85-5L5 7v3.5l6 1.5-6 1.5Zm0 0V7v6.5Z"/>
    </Icon>
  );
});

IconMaterialSend.displayName = 'AmauiIconMaterialSend';

export default IconMaterialSend;
