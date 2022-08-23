import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatAlignRightSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignRightSharpFilled'
      short_name='FormatAlignRight'

      {...props}
    >
      <path d="M3 21V19H21V21ZM9 17V15H21V17ZM3 13V11H21V13ZM9 9V7H21V9ZM3 5V3H21V5Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignRightSharpFilled.displayName = 'AmauiIconMaterialFormatAlignRightSharpFilled';

export default IconMaterialFormatAlignRightSharpFilled;
