import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeleteSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteSharpW100'
      short_name='Delete'

      {...props}
    >
      <path d="M6.3 19.7V6H5.3V5.3H9V4.6H15V5.3H18.7V6H17.7V19.7ZM7 19H17V6H7ZM10.05 17H10.75V8H10.05ZM13.25 17H13.95V8H13.25ZM7 6V19Z"/>
    </Icon>
  );
});

IconMaterialDeleteSharpW100.displayName = 'AmauiIconMaterialDeleteSharpW100';

export default IconMaterialDeleteSharpW100;
