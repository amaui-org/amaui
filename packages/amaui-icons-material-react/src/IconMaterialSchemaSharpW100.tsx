import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSchemaSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchemaSharpW100'
      short_name='Schema'

      {...props}
    >
      <path d="M5.15 21.85V18.15H7.15V13.85H5.15V10.15H7.15V5.85H5.15V2.15H9.85V5.85H7.85V10.15H9.85V11.65H15.15V10.15H19.85V13.85H15.15V12.35H9.85V13.85H7.85V18.15H9.85V21.85ZM5.85 21.15H9.15V18.85H5.85ZM5.85 13.15H9.15V10.85H5.85ZM15.85 13.15H19.15V10.85H15.85ZM5.85 5.15H9.15V2.85H5.85ZM7.5 4ZM7.5 12ZM17.5 12ZM7.5 20Z"/>
    </Icon>
  );
});

IconMaterialSchemaSharpW100.displayName = 'AmauiIconMaterialSchemaSharpW100';

export default IconMaterialSchemaSharpW100;
