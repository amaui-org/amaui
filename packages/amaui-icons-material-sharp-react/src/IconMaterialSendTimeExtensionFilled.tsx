import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendTimeExtensionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendTimeExtensionFilled'

      short_name='SendTimeExtension'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 22v-4l4-1-4-1v-4l10 5Zm-4.2-1H3v-5.8q1.2 0 2.1-.762.9-.763.9-1.938 0-1.175-.9-1.938Q4.2 9.8 3 9.8V4h6q0-1.05.725-1.775Q10.45 1.5 11.5 1.5q1.05 0 1.775.725Q14 2.95 14 4h6v9.25l-9-4.5v9.3q-1 .2-1.6.938-.6.737-.6 2.012Z"/>
    </Icon>
  );
});

IconMaterialSendTimeExtensionFilled.displayName = 'AmauiIconMaterialSendTimeExtensionFilled';

export default IconMaterialSendTimeExtensionFilled;
