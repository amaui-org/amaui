import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatClearSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatClearSharpW100Filled'
      short_name='FormatClear'

      {...props}
    >
      <path d="M12.35 9.85 11.825 9.325 12.85 6.85H9.3L8.6 6.15H18.85V6.85H13.625ZM19.2 20.2 11.325 12.3 8.925 17.95H8.15L10.8 11.775L3.55 4.55L4.05 4.05L19.7 19.7Z"/>
    </Icon>
  );
});

IconMaterialFormatClearSharpW100Filled.displayName = 'AmauiIconMaterialFormatClearSharpW100Filled';

export default IconMaterialFormatClearSharpW100Filled;
