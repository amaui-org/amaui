import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendToMobileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendToMobileW100'

      short_name='SendToMobile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17 15.1-.5-.5 2.25-2.25h-6.1v-.7h6.1L16.5 9.4l.5-.5 3.1 3.1Zm0 4.25H7V21h10Zm0-14.7V3H7v1.65ZM6.3 21.7V2.3h11.4v4.6H17V5.35H7v13.3h10V17.1h.7v4.6ZM7 3v1.65Zm0 18v-1.65Z"/>
    </Icon>
  );
});

IconMaterialSendToMobileW100.displayName = 'AmauiIconMaterialSendToMobileW100';

export default IconMaterialSendToMobileW100;
