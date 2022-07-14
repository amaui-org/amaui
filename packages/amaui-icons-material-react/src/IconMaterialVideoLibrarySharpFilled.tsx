import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoLibrarySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLibrarySharpFilled'
      short_name='VideoLibrary'

      {...props}
    >
      <path d="M11.5 14.5 18.5 10 11.5 5.5ZM6 18V2H22V18ZM2 22V6H4V20H18V22Z"/>
    </Icon>
  );
});

export default IconMaterialVideoLibrarySharpFilled;
