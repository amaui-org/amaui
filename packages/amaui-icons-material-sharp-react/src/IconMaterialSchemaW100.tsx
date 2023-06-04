import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSchemaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchemaW100'

      short_name='Schema'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.15 21.85v-3.7h2v-4.3h-2v-3.7h2v-4.3h-2v-3.7h4.7v3.7h-2v4.3h2v1.5h5.3v-1.5h4.7v3.7h-4.7v-1.5h-5.3v1.5h-2v4.3h2v3.7Zm.7-.7h3.3v-2.3h-3.3Zm0-8h3.3v-2.3h-3.3Zm10 0h3.3v-2.3h-3.3Zm-10-8h3.3v-2.3h-3.3ZM7.5 4Zm0 8Zm10 0Zm-10 8Z"/>
    </Icon>
  );
});

IconMaterialSchemaW100.displayName = 'AmauiIconMaterialSchemaW100';

export default IconMaterialSchemaW100;
