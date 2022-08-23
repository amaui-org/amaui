import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShortTextSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShortTextSharpW100Filled'
      short_name='ShortText'

      {...props}
    >
      <path d="M4.65 10.35V9.65H19.35V10.35ZM4.65 14.35V13.65H13.35V14.35Z"/>
    </Icon>
  );
});

IconMaterialShortTextSharpW100Filled.displayName = 'AmauiIconMaterialShortTextSharpW100Filled';

export default IconMaterialShortTextSharpW100Filled;
