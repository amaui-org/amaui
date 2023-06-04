import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLibraryAddCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryAddCheckW100Filled'

      short_name='LibraryAddCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.05 12.1-1.925-1.925q-.1-.1-.225-.1t-.25.125q-.125.125-.125.25t.125.25l1.875 1.875q.225.225.525.225.3 0 .525-.225l4-4q.1-.1.1-.225t-.125-.25q-.125-.125-.25-.125t-.25.125Zm-3.9 4.6q-.65 0-1.075-.425-.425-.425-.425-1.075V4.8q0-.65.425-1.075Q7.5 3.3 8.15 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm-2.7 2.7q-.65 0-1.075-.425-.425-.425-.425-1.075V7.15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V17.9q0 .35.225.575.225.225.575.225H16.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialLibraryAddCheckW100Filled.displayName = 'AmauiIconMaterialLibraryAddCheckW100Filled';

export default IconMaterialLibraryAddCheckW100Filled;
