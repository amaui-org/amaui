import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSchemaSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchemaSharpW100Filled'
      short_name='Schema'

      {...props}
    >
      <path d="M5.15 21.85V18.15H7.15V13.85H5.15V10.15H7.15V5.85H5.15V2.15H9.85V5.85H7.85V10.15H9.85V11.65H15.15V10.15H19.85V13.85H15.15V12.35H9.85V13.85H7.85V18.15H9.85V21.85Z"/>
    </Icon>
  );
});

IconMaterialSchemaSharpW100Filled.displayName = 'AmauiIconMaterialSchemaSharpW100Filled';

export default IconMaterialSchemaSharpW100Filled;
