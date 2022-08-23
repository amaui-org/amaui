import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewCompactSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactSharp'
      short_name='ViewCompact'

      {...props}
    >
      <path d="M2 20V4H22V20ZM20 11V6H4V11ZM10 18H20V13H10ZM4 18H8V13H4Z"/>
    </Icon>
  );
});

IconMaterialViewCompactSharp.displayName = 'AmauiIconMaterialViewCompactSharp';

export default IconMaterialViewCompactSharp;
