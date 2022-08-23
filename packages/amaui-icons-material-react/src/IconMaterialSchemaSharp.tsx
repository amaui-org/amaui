import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSchemaSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchemaSharp'
      short_name='Schema'

      {...props}
    >
      <path d="M4 23V17H6.5V15H4V9H6.5V7H4V1H11V7H8.5V9H11V11H14V9H21V15H14V13H11V15H8.5V17H11V23ZM6 21H9V19H6ZM6 13H9V11H6ZM16 13H19V11H16ZM6 5H9V3H6ZM7.5 4ZM7.5 12ZM17.5 12ZM7.5 20Z"/>
    </Icon>
  );
});

IconMaterialSchemaSharp.displayName = 'AmauiIconMaterialSchemaSharp';

export default IconMaterialSchemaSharp;
