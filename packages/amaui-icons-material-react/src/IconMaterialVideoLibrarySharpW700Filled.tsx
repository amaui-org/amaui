import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoLibrarySharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLibrarySharpW700Filled'
      short_name='VideoLibrary'

      {...props}
    >
      <path d="M11.55 14.275 19.075 9.425 11.55 4.575ZM5.725 18.275V0.575H23.425V18.275ZM0.575 23.425V5.725H3.725V20.275H18.275V23.425Z"/>
    </Icon>
  )
});

export default IconMaterialVideoLibrarySharpW700Filled;
