import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCaptureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CaptureW100Filled'

      short_name='Capture'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 844V308h696v536H132Zm128-128h440V436H260v280Z"/>
    </Icon>
  );
});

IconMaterialCaptureW100Filled.displayName = 'AmauiIconMaterialCaptureW100Filled';

export default IconMaterialCaptureW100Filled;
