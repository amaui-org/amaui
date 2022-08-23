import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatStrikethroughSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatStrikethroughSharpW100Filled'
      short_name='FormatStrikethrough'

      {...props}
    >
      <path d="M3.15 13.35V12.65H20.85V13.35ZM11.65 10.65V5.85H6.15V5.15H17.85V5.85H12.35V10.65ZM11.65 18.85V15.35H12.35V18.85Z"/>
    </Icon>
  );
});

IconMaterialFormatStrikethroughSharpW100Filled.displayName = 'AmauiIconMaterialFormatStrikethroughSharpW100Filled';

export default IconMaterialFormatStrikethroughSharpW100Filled;
