import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrowseGallerySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseGallerySharpFilled'
      short_name='BrowseGallery'

      {...props}
    >
      <path d="M11.8 16.2 13.2 14.8 10 11.6V7H8V12.4ZM18 20.5V18.3Q19.85 17.425 20.925 15.725Q22 14.025 22 12Q22 9.975 20.925 8.275Q19.85 6.575 18 5.7V3.5Q20.725 4.45 22.363 6.787Q24 9.125 24 12Q24 14.875 22.363 17.212Q20.725 19.55 18 20.5ZM9 21Q7.125 21 5.487 20.288Q3.85 19.575 2.638 18.362Q1.425 17.15 0.713 15.512Q0 13.875 0 12Q0 10.125 0.713 8.487Q1.425 6.85 2.638 5.637Q3.85 4.425 5.487 3.712Q7.125 3 9 3Q10.875 3 12.512 3.712Q14.15 4.425 15.363 5.637Q16.575 6.85 17.288 8.487Q18 10.125 18 12Q18 13.875 17.288 15.512Q16.575 17.15 15.363 18.362Q14.15 19.575 12.512 20.288Q10.875 21 9 21Z"/>
    </Icon>
  );
});

IconMaterialBrowseGallerySharpFilled.displayName = 'AmauiIconMaterialBrowseGallerySharpFilled';

export default IconMaterialBrowseGallerySharpFilled;
