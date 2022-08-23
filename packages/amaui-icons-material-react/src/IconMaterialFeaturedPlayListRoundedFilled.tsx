import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeaturedPlayListRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedPlayListRoundedFilled'
      short_name='FeaturedPlayList'

      {...props}
    >
      <path d="M7 13H14Q14.425 13 14.713 12.712Q15 12.425 15 12Q15 11.575 14.713 11.287Q14.425 11 14 11H7Q6.575 11 6.287 11.287Q6 11.575 6 12Q6 12.425 6.287 12.712Q6.575 13 7 13ZM7 10H14Q14.425 10 14.713 9.712Q15 9.425 15 9Q15 8.575 14.713 8.287Q14.425 8 14 8H7Q6.575 8 6.287 8.287Q6 8.575 6 9Q6 9.425 6.287 9.712Q6.575 10 7 10ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialFeaturedPlayListRoundedFilled.displayName = 'AmauiIconMaterialFeaturedPlayListRoundedFilled';

export default IconMaterialFeaturedPlayListRoundedFilled;
