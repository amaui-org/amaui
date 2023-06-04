import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbnailBarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbnailBarW100'

      short_name='ThumbnailBar'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M192 844q-25 0-42.5-17.5T132 784V368q0-25 17.5-42.5T192 308h576q25 0 42.5 17.5T828 368v416q0 25-17.5 42.5T768 844H192Zm156-28h420q14 0 23-9t9-23V368q0-14-9-23t-23-9H348v480Zm-28 0V336H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9h128Zm-160 0V336v480Zm160 0h28-28Zm0-480h28-28Z"/>
    </Icon>
  );
});

IconMaterialThumbnailBarW100.displayName = 'AmauiIconMaterialThumbnailBarW100';

export default IconMaterialThumbnailBarW100;
