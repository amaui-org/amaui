import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddToPhotosSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToPhotosSharpW700Filled'
      short_name='AddToPhotos'

      {...props}
    >
      <path d="M13.575 13.425H15.575V10.425H18.575V8.425H15.575V5.425H13.575V8.425H10.575V10.425H13.575ZM5.725 18.275V0.575H23.425V18.275ZM0.575 23.425V5.725H3.725V20.275H18.275V23.425Z"/>
    </Icon>
  )
});

export default IconMaterialAddToPhotosSharpW700Filled;
