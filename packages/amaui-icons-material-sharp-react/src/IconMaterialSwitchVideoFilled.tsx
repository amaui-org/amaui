import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchVideoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchVideoFilled'

      short_name='SwitchVideo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.5 15.5 1.4-1.4L7.8 13h4.4l-1.1 1.1 1.4 1.4L16 12l-3.5-3.5-1.4 1.4 1.1 1.1H7.8l1.1-1.1-1.4-1.4L4 12ZM2 20V4h16v6.5l4-4v11l-4-4V20Z"/>
    </Icon>
  );
});

IconMaterialSwitchVideoFilled.displayName = 'AmauiIconMaterialSwitchVideoFilled';

export default IconMaterialSwitchVideoFilled;
