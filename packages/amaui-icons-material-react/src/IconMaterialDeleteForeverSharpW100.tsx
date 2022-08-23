import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeleteForeverSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteForeverSharpW100'
      short_name='DeleteForever'

      {...props}
    >
      <path d="M9.4 15.6 12 13 14.6 15.6 15.1 15.1 12.5 12.5 15.1 9.9 14.6 9.4 12 12 9.4 9.4 8.9 9.9 11.5 12.5 8.9 15.1ZM6.3 19.7V6H5.3V5.3H9V4.6H15V5.3H18.7V6H17.7V19.7ZM7 19H17V6H7ZM7 6V19Z"/>
    </Icon>
  );
});

IconMaterialDeleteForeverSharpW100.displayName = 'AmauiIconMaterialDeleteForeverSharpW100';

export default IconMaterialDeleteForeverSharpW100;
