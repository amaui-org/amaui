import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatAlignRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignRightW100'

      short_name='FormatAlignRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 20.35v-.7h16.7v.7Zm6-4v-.7h10.7v.7Zm-6-4v-.7h16.7v.7Zm6-4v-.7h10.7v.7Zm-6-4v-.7h16.7v.7Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignRightW100.displayName = 'AmauiIconMaterialFormatAlignRightW100';

export default IconMaterialFormatAlignRightW100;
