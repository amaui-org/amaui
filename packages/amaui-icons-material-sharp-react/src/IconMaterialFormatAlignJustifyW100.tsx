import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatAlignJustifyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignJustifyW100'

      short_name='FormatAlignJustify'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 20.35v-.7h16.7v.7Zm0-4v-.7h16.7v.7Zm0-4v-.7h16.7v.7Zm0-4v-.7h16.7v.7Zm0-4v-.7h16.7v.7Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignJustifyW100.displayName = 'AmauiIconMaterialFormatAlignJustifyW100';

export default IconMaterialFormatAlignJustifyW100;
