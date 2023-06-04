import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoLibraryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoLibraryFilled'

      short_name='PhotoLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 14h10l-3.45-4.5-2.3 3-1.55-2Zm-3 4V2h16v16Zm-4 4V6h2v14h14v2Z"/>
    </Icon>
  );
});

IconMaterialPhotoLibraryFilled.displayName = 'AmauiIconMaterialPhotoLibraryFilled';

export default IconMaterialPhotoLibraryFilled;
