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
      <path d="M11.55 15.05q.1.1.25.1t.25-.1q.1-.1.1-.25t-.1-.25L9.575 12.1q-.125-.125-.175-.263-.05-.137-.05-.287V8q0-.15-.1-.25T9 7.65q-.15 0-.25.1t-.1.25v3.5q0 .3.125.587.125.288.325.488ZM18 18.525q0-.1.062-.188.063-.087.138-.137 1.75-.875 2.775-2.55Q22 13.975 22 12q0-1.975-1.025-3.65Q19.95 6.675 18.2 5.8q-.075-.05-.138-.138Q18 5.575 18 5.475q0-.25.163-.35.162-.1.362.025 1.9 1.05 3.037 2.862Q22.7 9.825 22.7 12t-1.138 3.988q-1.137 1.812-3.037 2.862-.2.125-.362.025-.163-.1-.163-.35ZM9 19.7q-1.6 0-3-.6t-2.45-1.65Q2.5 16.4 1.9 15q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45Q4.6 5.5 6 4.9q1.4-.6 3-.6t3 .6q1.4.6 2.45 1.65Q15.5 7.6 16.1 9q.6 1.4.6 3t-.6 3q-.6 1.4-1.65 2.45Q13.4 18.5 12 19.1q-1.4.6-3 .6Z"/>
    </Icon>
  );
});

IconMaterialBrowseGalleryW100Filled.displayName = 'AmauiIconMaterialBrowseGalleryW100Filled';

export default IconMaterialBrowseGalleryW100Filled;
