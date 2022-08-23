import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewQuiltSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewQuiltSharp'
      short_name='ViewQuilt'

      {...props}
    >
      <path d="M3 5H21V19H3ZM10.325 7V11H19V7ZM19 13H15.675V17H19ZM10.325 13V17H13.675V13ZM5 17H8.325V7H5Z"/>
    </Icon>
  );
});

IconMaterialViewQuiltSharp.displayName = 'AmauiIconMaterialViewQuiltSharp';

export default IconMaterialViewQuiltSharp;
