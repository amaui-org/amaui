import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeaturedVideoOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedVideoOutlinedFilled'
      short_name='FeaturedVideo'

      {...props}
    >
      <path d="M5 14H14V7H5ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  )
});

export default IconMaterialFeaturedVideoOutlinedFilled;
