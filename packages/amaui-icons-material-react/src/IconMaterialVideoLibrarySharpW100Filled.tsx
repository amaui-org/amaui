import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoLibrarySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLibrarySharpW100Filled'
      short_name='VideoLibrary'

      {...props}
    >
      <path d="M11.5 13.3 16.65 10 11.5 6.7ZM6.65 16.7V3.3H20.05V16.7ZM3.95 19.4V6.8H4.65V18.7H16.55V19.4Z"/>
    </Icon>
  );
});

export default IconMaterialVideoLibrarySharpW100Filled;
