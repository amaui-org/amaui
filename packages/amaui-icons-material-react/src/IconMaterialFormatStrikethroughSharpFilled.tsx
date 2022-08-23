import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatStrikethroughSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatStrikethroughSharpFilled'
      short_name='FormatStrikethrough'

      {...props}
    >
      <path d="M2 14V12H22V14ZM10.5 10V7H5V4H19V7H13.5V10ZM10.5 20V16H13.5V20Z"/>
    </Icon>
  );
});

IconMaterialFormatStrikethroughSharpFilled.displayName = 'AmauiIconMaterialFormatStrikethroughSharpFilled';

export default IconMaterialFormatStrikethroughSharpFilled;
