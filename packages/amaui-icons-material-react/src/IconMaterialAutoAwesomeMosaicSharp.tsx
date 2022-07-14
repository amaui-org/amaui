import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeMosaicSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMosaicSharp'
      short_name='AutoAwesomeMosaic'

      {...props}
    >
      <path d="M11 21H3V3H11ZM9 19V5H5V19ZM13 11V3H21V11ZM15 9H19V5H15ZM13 21V13H21V21ZM15 19H19V15H15ZM9 12ZM15 9ZM15 15Z"/>
    </Icon>
  );
});

export default IconMaterialAutoAwesomeMosaicSharp;
