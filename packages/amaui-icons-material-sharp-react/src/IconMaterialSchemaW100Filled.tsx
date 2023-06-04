import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSchemaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchemaW100Filled'

      short_name='Schema'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.15 21.85v-3.7h2v-4.3h-2v-3.7h2v-4.3h-2v-3.7h4.7v3.7h-2v4.3h2v1.5h5.3v-1.5h4.7v3.7h-4.7v-1.5h-5.3v1.5h-2v4.3h2v3.7Z"/>
    </Icon>
  );
});

IconMaterialSchemaW100Filled.displayName = 'AmauiIconMaterialSchemaW100Filled';

export default IconMaterialSchemaW100Filled;
