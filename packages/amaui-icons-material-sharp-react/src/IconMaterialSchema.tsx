import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSchema = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Schema'

      short_name='Schema'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 23v-6h2.5v-2H4V9h2.5V7H4V1h7v6H8.5v2H11v2h3V9h7v6h-7v-2h-3v2H8.5v2H11v6Zm2-2h3v-2H6Zm0-8h3v-2H6Zm10 0h3v-2h-3ZM6 5h3V3H6Zm1.5-1Zm0 8Zm10 0Zm-10 8Z"/>
    </Icon>
  );
});

IconMaterialSchema.displayName = 'AmauiIconMaterialSchema';

export default IconMaterialSchema;
