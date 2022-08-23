import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatIndentDecreaseSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatIndentDecreaseSharpFilled'
      short_name='FormatIndentDecrease'

      {...props}
    >
      <path d="M11 17V15H21V17ZM7 16 3 12 7 8ZM3 21V19H21V21ZM3 5V3H21V5ZM11 9V7H21V9ZM11 13V11H21V13Z"/>
    </Icon>
  );
});

IconMaterialFormatIndentDecreaseSharpFilled.displayName = 'AmauiIconMaterialFormatIndentDecreaseSharpFilled';

export default IconMaterialFormatIndentDecreaseSharpFilled;
