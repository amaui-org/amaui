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
      <path d="M6.3 21.85q-.475 0-.812-.337-.338-.338-.338-.813v-1.4q0-.475.338-.813.337-.337.812-.337h.85v-4.3H6.3q-.475 0-.812-.338-.338-.337-.338-.812v-1.4q0-.475.338-.813.337-.337.812-.337h.85v-4.3H6.3q-.475 0-.812-.338-.338-.337-.338-.812V3.3q0-.475.338-.813.337-.337.812-.337h2.4q.475 0 .813.337.337.338.337.813v1.4q0 .475-.337.812-.338.338-.813.338h-.85v4.3h.85q.475 0 .813.337.337.338.337.813v.35h5.3v-.35q0-.475.338-.813.337-.337.812-.337h2.4q.475 0 .813.337.337.338.337.813v1.4q0 .475-.337.812-.338.338-.813.338h-2.4q-.475 0-.812-.338-.338-.337-.338-.812v-.35h-5.3v.35q0 .475-.337.812-.338.338-.813.338h-.85v4.3h.85q.475 0 .813.337.337.338.337.813v1.4q0 .475-.337.813-.338.337-.813.337Z"/>
    </Icon>
  );
});

IconMaterialSchemaW100Filled.displayName = 'AmauiIconMaterialSchemaW100Filled';

export default IconMaterialSchemaW100Filled;
