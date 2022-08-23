import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderInnerSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderInnerSharp'
      short_name='BorderInner'

      {...props}
    >
      <path d="M3 21V19H5V21ZM11 21V13H3V11H11V3H13V11H21V13H13V21ZM3 17V15H5V17ZM3 9V7H5V9ZM3 5V3H5V5ZM7 21V19H9V21ZM7 5V3H9V5ZM15 21V19H17V21ZM15 5V3H17V5ZM19 21V19H21V21ZM19 17V15H21V17ZM19 9V7H21V9ZM19 5V3H21V5Z"/>
    </Icon>
  );
});

IconMaterialBorderInnerSharp.displayName = 'AmauiIconMaterialBorderInnerSharp';

export default IconMaterialBorderInnerSharp;
