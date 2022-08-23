import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInputSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InputSharp'
      short_name='Input'

      {...props}
    >
      <path d="M11.5 16.5 10.1 15.05 12.175 13H2V11H12.175L10.1 8.95L11.5 7.5L16 12ZM2 20V15H4V18H20V6H4V9H2V4H22V20Z"/>
    </Icon>
  );
});

IconMaterialInputSharp.displayName = 'AmauiIconMaterialInputSharp';

export default IconMaterialInputSharp;
