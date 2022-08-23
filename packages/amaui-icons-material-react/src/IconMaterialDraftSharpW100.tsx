import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDraftSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftSharpW100'
      short_name='Draft'

      {...props}
    >
      <path d="M5.3 20.7V3.3H14.65L18.7 7.35V20.7ZM6 20H18V7.7H14.3V4H6ZM6 20V7.7V4Z"/>
    </Icon>
  );
});

IconMaterialDraftSharpW100.displayName = 'AmauiIconMaterialDraftSharpW100';

export default IconMaterialDraftSharpW100;
