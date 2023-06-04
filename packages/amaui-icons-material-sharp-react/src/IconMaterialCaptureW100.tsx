import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCaptureW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CaptureW100'

      short_name='Capture'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 844V308h696v536H132Zm28-28h640V336H160v480Zm100-100h440V436H260v280Z"/>
    </Icon>
  );
});

IconMaterialCaptureW100.displayName = 'AmauiIconMaterialCaptureW100';

export default IconMaterialCaptureW100;
