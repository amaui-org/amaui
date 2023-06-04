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
      <path d="M4.3 16.925v-9.85q0-.4.338-.612.337-.213.712-.063L17 11.3q.45.2.45.7 0 .5-.45.7L5.35 17.6q-.375.15-.712-.062-.338-.213-.338-.613ZM5 17l11.85-5L5 7v4l4.5 1L5 13Zm0-5V7v10Z"/>
    </Icon>
  );
});

IconMaterialSendW100.displayName = 'AmauiIconMaterialSendW100';

export default IconMaterialSendW100;
