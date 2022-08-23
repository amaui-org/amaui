import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatItalicSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatItalicSharpW100Filled'
      short_name='FormatItalic'

      {...props}
    >
      <path d="M5.65 18.85V18.15H9.175L14.075 5.85H10.55V5.15H18.35V5.85H14.825L9.925 18.15H13.45V18.85Z"/>
    </Icon>
  );
});

IconMaterialFormatItalicSharpW100Filled.displayName = 'AmauiIconMaterialFormatItalicSharpW100Filled';

export default IconMaterialFormatItalicSharpW100Filled;
