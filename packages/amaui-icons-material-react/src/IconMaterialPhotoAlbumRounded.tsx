import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoAlbumRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAlbumRounded'
      short_name='PhotoAlbum'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM6 20H18Q18 20 18 20Q18 20 18 20V4Q18 4 18 4Q18 4 18 4H16V10.125Q16 10.425 15.75 10.562Q15.5 10.7 15.25 10.55L13.5 9.5L11.75 10.55Q11.5 10.7 11.25 10.562Q11 10.425 11 10.125V4H6Q6 4 6 4Q6 4 6 4V20Q6 20 6 20Q6 20 6 20ZM8 18H16Q16.3 18 16.45 17.725Q16.6 17.45 16.4 17.2L14.025 14.025Q13.875 13.825 13.625 13.825Q13.375 13.825 13.225 14.025L11 17L9.775 15.35Q9.625 15.15 9.375 15.15Q9.125 15.15 8.975 15.35L7.6 17.2Q7.4 17.45 7.55 17.725Q7.7 18 8 18ZM11 4H13.5H16ZM6 4Q6 4 6 4Q6 4 6 4Q6 4 6 4Q6 4 6 4H11H13.5H16H18Q18 4 18 4Q18 4 18 4Q18 4 18 4Q18 4 18 4Z"/>
    </Icon>
  );
});

IconMaterialPhotoAlbumRounded.displayName = 'AmauiIconMaterialPhotoAlbumRounded';

export default IconMaterialPhotoAlbumRounded;
