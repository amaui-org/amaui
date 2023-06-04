import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideocamFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamFilled'

      short_name='Videocam'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h16v6.5l4-4v11l-4-4V20Z"/>
    </Icon>
  );
});

IconMaterialVideocamFilled.displayName = 'AmauiIconMaterialVideocamFilled';

export default IconMaterialVideocamFilled;
