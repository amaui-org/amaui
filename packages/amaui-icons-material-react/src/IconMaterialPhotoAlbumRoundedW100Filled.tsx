import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoAlbumRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAlbumRoundedW100Filled'
      short_name='PhotoAlbum'

      {...props}
    >
      <path d="M6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V4.8Q5.3 4.15 5.725 3.725Q6.15 3.3 6.8 3.3H17.2Q17.85 3.3 18.275 3.725Q18.7 4.15 18.7 4.8V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7ZM12.9 9.5 14.15 8.75 15.4 9.5Q15.6 9.625 15.8 9.5Q16 9.375 16 9.15V4H12.3V9.15Q12.3 9.375 12.5 9.5Q12.7 9.625 12.9 9.5ZM8.75 17.35H15.45Q15.725 17.35 15.825 17.125Q15.925 16.9 15.775 16.7L14 14.35Q13.875 14.2 13.688 14.2Q13.5 14.2 13.375 14.35L11.2 17.05L9.925 15.575Q9.8 15.425 9.613 15.425Q9.425 15.425 9.3 15.6L8.45 16.7Q8.3 16.9 8.4 17.125Q8.5 17.35 8.75 17.35Z"/>
    </Icon>
  );
});

IconMaterialPhotoAlbumRoundedW100Filled.displayName = 'AmauiIconMaterialPhotoAlbumRoundedW100Filled';

export default IconMaterialPhotoAlbumRoundedW100Filled;
