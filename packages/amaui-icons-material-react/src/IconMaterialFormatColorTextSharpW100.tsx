import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatColorTextSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorTextSharpW100'
      short_name='FormatColorText'

      {...props}
    >
      <path d="M2 21V19.6H22V21ZM6.45 15.95 11.75 3.25H12.25L17.55 15.95H16.7L15.2 12.3H8.7L7.2 15.95ZM8.95 11.65H14.95L12.05 4.55H11.9Z"/>
    </Icon>
  );
});

IconMaterialFormatColorTextSharpW100.displayName = 'AmauiIconMaterialFormatColorTextSharpW100';

export default IconMaterialFormatColorTextSharpW100;
