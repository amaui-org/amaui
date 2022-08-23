import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoLibrarySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoLibrarySharpW100'
      short_name='PhotoLibrary'

      {...props}
    >
      <path d="M9.2 13.6H17.5L14.95 10.2L12.45 13.3L10.85 11.45ZM6.65 16.7V3.3H20.05V16.7ZM7.35 16H19.35V4H7.35ZM3.95 19.4V6.8H4.65V18.7H16.55V19.4ZM7.35 16V4V16Z"/>
    </Icon>
  );
});

IconMaterialPhotoLibrarySharpW100.displayName = 'AmauiIconMaterialPhotoLibrarySharpW100';

export default IconMaterialPhotoLibrarySharpW100;
