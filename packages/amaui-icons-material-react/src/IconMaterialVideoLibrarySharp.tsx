import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoLibrarySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLibrarySharp'
      short_name='VideoLibrary'

      {...props}
    >
      <path d="M11.5 14.5 18.5 10 11.5 5.5ZM6 18V2H22V18ZM8 16H20V4H8ZM2 22V6H4V20H18V22ZM8 16V4V16Z"/>
    </Icon>
  )
});

export default IconMaterialVideoLibrarySharp;
