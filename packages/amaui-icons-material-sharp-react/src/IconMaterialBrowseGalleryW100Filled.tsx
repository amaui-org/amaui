import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrowseGalleryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseGalleryW100Filled'

      short_name='BrowseGallery'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.8 15.275.475-.475-2.925-2.925V7.65h-.7v4.475ZM18 19.1v-.8q1.85-.875 2.925-2.575Q22 14.025 22 12q0-2.025-1.075-3.725Q19.85 6.575 18 5.7v-.8q2.125.95 3.413 2.862Q22.7 9.675 22.7 12t-1.287 4.237Q20.125 18.15 18 19.1Zm-9 .6q-1.6 0-3-.6t-2.45-1.65Q2.5 16.4 1.9 15q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45Q4.6 5.5 6 4.9q1.4-.6 3-.6t3 .6q1.4.6 2.45 1.65Q15.5 7.6 16.1 9q.6 1.4.6 3t-.6 3q-.6 1.4-1.65 2.45Q13.4 18.5 12 19.1q-1.4.6-3 .6Z"/>
    </Icon>
  );
});

IconMaterialBrowseGalleryW100Filled.displayName = 'AmauiIconMaterialBrowseGalleryW100Filled';

export default IconMaterialBrowseGalleryW100Filled;
