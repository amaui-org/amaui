import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrowseGallerySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseGallerySharpW100Filled'
      short_name='BrowseGallery'

      {...props}
    >
      <path d="M11.8 15.275 12.275 14.8 9.35 11.875V7.65H8.65V12.125ZM18 19.1V18.3Q19.85 17.425 20.925 15.725Q22 14.025 22 12Q22 9.975 20.925 8.275Q19.85 6.575 18 5.7V4.9Q20.125 5.85 21.413 7.762Q22.7 9.675 22.7 12Q22.7 14.325 21.413 16.237Q20.125 18.15 18 19.1ZM9 19.7Q7.4 19.7 6 19.1Q4.6 18.5 3.55 17.45Q2.5 16.4 1.9 15Q1.3 13.6 1.3 12Q1.3 10.4 1.9 9Q2.5 7.6 3.55 6.55Q4.6 5.5 6 4.9Q7.4 4.3 9 4.3Q10.6 4.3 12 4.9Q13.4 5.5 14.45 6.55Q15.5 7.6 16.1 9Q16.7 10.4 16.7 12Q16.7 13.6 16.1 15Q15.5 16.4 14.45 17.45Q13.4 18.5 12 19.1Q10.6 19.7 9 19.7Z"/>
    </Icon>
  );
});

IconMaterialBrowseGallerySharpW100Filled.displayName = 'AmauiIconMaterialBrowseGallerySharpW100Filled';

export default IconMaterialBrowseGallerySharpW100Filled;
