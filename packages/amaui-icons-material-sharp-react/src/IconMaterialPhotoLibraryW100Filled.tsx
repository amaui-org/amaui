import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoLibraryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoLibraryW100Filled'

      short_name='PhotoLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.2 13.6h8.3l-2.55-3.4-2.5 3.1-1.6-1.85Zm-2.55 3.1V3.3h13.4v13.4Zm-2.7 2.7V6.8h.7v11.9h11.9v.7Z"/>
    </Icon>
  );
});

IconMaterialPhotoLibraryW100Filled.displayName = 'AmauiIconMaterialPhotoLibraryW100Filled';

export default IconMaterialPhotoLibraryW100Filled;
