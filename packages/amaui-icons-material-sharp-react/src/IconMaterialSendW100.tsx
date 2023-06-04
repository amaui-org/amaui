import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendW100'

      short_name='Send'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 18.05V5.95L18.65 12ZM5 17l11.85-5L5 7v4l4.5 1L5 13Zm0 0V7v6Z"/>
    </Icon>
  );
});

IconMaterialSendW100.displayName = 'AmauiIconMaterialSendW100';

export default IconMaterialSendW100;
