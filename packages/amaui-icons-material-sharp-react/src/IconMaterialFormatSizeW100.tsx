import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatSizeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatSizeW100'

      short_name='FormatSize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.15 18.85v-13h-5v-.7h10.7v.7h-5v13Zm-9 0v-8h-3v-.7h6.7v.7h-3v8Z"/>
    </Icon>
  );
});

IconMaterialFormatSizeW100.displayName = 'AmauiIconMaterialFormatSizeW100';

export default IconMaterialFormatSizeW100;
