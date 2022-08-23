import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatAlignJustifySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignJustifySharpFilled'
      short_name='FormatAlignJustify'

      {...props}
    >
      <path d="M3 21V19H21V21ZM3 17V15H21V17ZM3 13V11H21V13ZM3 9V7H21V9ZM3 5V3H21V5Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignJustifySharpFilled.displayName = 'AmauiIconMaterialFormatAlignJustifySharpFilled';

export default IconMaterialFormatAlignJustifySharpFilled;
