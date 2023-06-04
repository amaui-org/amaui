import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSchemaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchemaFilled'

      short_name='Schema'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 23v-6h2.5v-2H4V9h2.5V7H4V1h7v6H8.5v2H11v2h3V9h7v6h-7v-2h-3v2H8.5v2H11v6Z"/>
    </Icon>
  );
});

IconMaterialSchemaFilled.displayName = 'AmauiIconMaterialSchemaFilled';

export default IconMaterialSchemaFilled;
