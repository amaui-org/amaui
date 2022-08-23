import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGridViewSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridViewSharp'
      short_name='GridView'

      {...props}
    >
      <path d="M3 11V3H11V11ZM3 21V13H11V21ZM13 11V3H21V11ZM13 21V13H21V21ZM5 9H9V5H5ZM15 9H19V5H15ZM15 19H19V15H15ZM5 19H9V15H5ZM15 9ZM15 15ZM9 15ZM9 9Z"/>
    </Icon>
  );
});

IconMaterialGridViewSharp.displayName = 'AmauiIconMaterialGridViewSharp';

export default IconMaterialGridViewSharp;
