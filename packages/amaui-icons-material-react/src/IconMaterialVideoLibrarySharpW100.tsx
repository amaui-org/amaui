import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoLibrarySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLibrarySharpW100'
      short_name='VideoLibrary'

      {...props}
    >
      <path d="M11.5 13.3 16.65 10 11.5 6.7ZM6.65 16.7V3.3H20.05V16.7ZM7.35 16H19.35V4H7.35ZM3.95 19.4V6.8H4.65V18.7H16.55V19.4ZM7.35 16V4V16Z"/>
    </Icon>
  );
});

IconMaterialVideoLibrarySharpW100.displayName = 'AmauiIconMaterialVideoLibrarySharpW100';

export default IconMaterialVideoLibrarySharpW100;
