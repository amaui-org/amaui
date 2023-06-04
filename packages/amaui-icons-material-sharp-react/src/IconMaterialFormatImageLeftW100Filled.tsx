import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatImageLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatImageLeftW100Filled'

      short_name='FormatImageLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 20.35v-.7h16.7v.7Zm0-4v-8.7h8.7v8.7Zm0-12v-.7h16.7v.7Zm.7 11.3h7.3v-7.3h-7.3Zm11.3.7v-.7h4.7v.7Zm0-4v-.7h4.7v.7Zm0-4v-.7h4.7v.7Z"/>
    </Icon>
  );
});

IconMaterialFormatImageLeftW100Filled.displayName = 'AmauiIconMaterialFormatImageLeftW100Filled';

export default IconMaterialFormatImageLeftW100Filled;
