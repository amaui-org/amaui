import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendToMobileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendToMobileW100Filled'

      short_name='SendToMobile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17 15.1-.5-.5 2.25-2.25h-6.1v-.7h6.1L16.5 9.4l.5-.5 3.1 3.1ZM6.3 21.7V2.3h11.4v4.6H17V5.35H7v13.3h10V17.1h.7v4.6Z"/>
    </Icon>
  );
});

IconMaterialSendToMobileW100Filled.displayName = 'AmauiIconMaterialSendToMobileW100Filled';

export default IconMaterialSendToMobileW100Filled;
