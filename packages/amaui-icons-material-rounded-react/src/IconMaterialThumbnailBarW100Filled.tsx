import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbnailBarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbnailBarW100Filled'

      short_name='ThumbnailBar'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M192 844q-24.75 0-42.375-17.625T132 784V368q0-24.75 17.625-42.375T192 308h128v536H192Zm156 0V308h420q24.75 0 42.375 17.625T828 368v416q0 24.75-17.625 42.375T768 844H348Z"/>
    </Icon>
  );
});

IconMaterialThumbnailBarW100Filled.displayName = 'AmauiIconMaterialThumbnailBarW100Filled';

export default IconMaterialThumbnailBarW100Filled;
