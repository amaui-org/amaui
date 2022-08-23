import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeaturedVideoRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedVideoRoundedFilled'
      short_name='FeaturedVideo'

      {...props}
    >
      <path d="M6 14H13Q13.425 14 13.713 13.712Q14 13.425 14 13V8Q14 7.575 13.713 7.287Q13.425 7 13 7H6Q5.575 7 5.287 7.287Q5 7.575 5 8V13Q5 13.425 5.287 13.712Q5.575 14 6 14ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialFeaturedVideoRoundedFilled.displayName = 'AmauiIconMaterialFeaturedVideoRoundedFilled';

export default IconMaterialFeaturedVideoRoundedFilled;
