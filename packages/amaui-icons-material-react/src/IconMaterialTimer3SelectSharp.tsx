import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimer3SelectSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer3SelectSharp'
      short_name='Timer3Select'

      {...props}
    >
      <path d="M4 19V16H10V13.5H4V10.5H10V8H4V5H13V19ZM15 19V17H19V16H15V11H21V13H17V14H21V19Z"/>
    </Icon>
  );
});

IconMaterialTimer3SelectSharp.displayName = 'AmauiIconMaterialTimer3SelectSharp';

export default IconMaterialTimer3SelectSharp;
