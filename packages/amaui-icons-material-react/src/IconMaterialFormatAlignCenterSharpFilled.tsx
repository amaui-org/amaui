import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatAlignCenterSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignCenterSharpFilled'
      short_name='FormatAlignCenter'

      {...props}
    >
      <path d="M7 17V15H17V17ZM3 21V19H21V21ZM3 13V11H21V13ZM7 9V7H17V9ZM3 5V3H21V5Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignCenterSharpFilled.displayName = 'AmauiIconMaterialFormatAlignCenterSharpFilled';

export default IconMaterialFormatAlignCenterSharpFilled;
