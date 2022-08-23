import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableSharp'
      short_name='Table'

      {...props}
    >
      <path d="M3 21V3H21V21ZM5 9H19V5H5ZM10.325 14H13.675V11H10.325ZM10.325 19H13.675V16H10.325ZM5 14H8.325V11H5ZM15.675 14H19V11H15.675ZM5 19H8.325V16H5ZM15.675 19H19V16H15.675Z"/>
    </Icon>
  );
});

IconMaterialTableSharp.displayName = 'AmauiIconMaterialTableSharp';

export default IconMaterialTableSharp;
