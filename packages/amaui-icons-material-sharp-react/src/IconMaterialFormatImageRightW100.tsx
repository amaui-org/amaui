import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatImageRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatImageRightW100'

      short_name='FormatImageRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 20.35v-.7h16.7v.7Zm0-4v-.7h4.7v.7Zm0-4v-.7h4.7v.7Zm0-4v-.7h4.7v.7Zm0-4v-.7h16.7v.7Zm8 12v-8.7h8.7v8.7Zm.7-.7h7.3v-7.3h-7.3Z"/>
    </Icon>
  );
});

IconMaterialFormatImageRightW100.displayName = 'AmauiIconMaterialFormatImageRightW100';

export default IconMaterialFormatImageRightW100;
