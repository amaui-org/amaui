import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoLibrarySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoLibrarySharp'
      short_name='PhotoLibrary'

      {...props}
    >
      <path d="M9 14H19L15.55 9.5L13.25 12.5L11.7 10.5ZM6 18V2H22V18ZM8 16H20V4H8ZM2 22V6H4V20H18V22ZM8 16V4V16Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoLibrarySharp;
