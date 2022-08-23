import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoAlbumRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAlbumRoundedFilled'
      short_name='PhotoAlbum'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM11.75 10.55 13.5 9.5 15.25 10.55Q15.5 10.7 15.75 10.55Q16 10.4 16 10.125V4H11V10.125Q11 10.4 11.25 10.55Q11.5 10.7 11.75 10.55ZM8 18H16Q16.3 18 16.45 17.725Q16.6 17.45 16.4 17.2L14.025 14.025Q13.875 13.825 13.625 13.825Q13.375 13.825 13.225 14.025L11 17L9.775 15.35Q9.625 15.15 9.375 15.15Q9.125 15.15 8.975 15.35L7.6 17.2Q7.4 17.45 7.55 17.725Q7.7 18 8 18Z"/>
    </Icon>
  );
});

IconMaterialPhotoAlbumRoundedFilled.displayName = 'AmauiIconMaterialPhotoAlbumRoundedFilled';

export default IconMaterialPhotoAlbumRoundedFilled;
