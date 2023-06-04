import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendW100Filled'

      short_name='Send'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.35 17.6q-.375.15-.712-.062-.338-.213-.338-.613V13.75q0-.275.163-.475.162-.2.437-.25L9.5 12l-4.6-1.025q-.275-.05-.437-.25-.163-.2-.163-.475V7.075q0-.4.338-.612.337-.213.712-.063L17 11.3q.45.2.45.7 0 .5-.45.7Z"/>
    </Icon>
  );
});

IconMaterialSendW100Filled.displayName = 'AmauiIconMaterialSendW100Filled';

export default IconMaterialSendW100Filled;
