import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeaturedVideoRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedVideoRoundedW100Filled'
      short_name='FeaturedVideo'

      {...props}
    >
      <path d="M6.4 13.35H12.6Q12.925 13.35 13.138 13.137Q13.35 12.925 13.35 12.6V8.4Q13.35 8.075 13.138 7.862Q12.925 7.65 12.6 7.65H6.4Q6.075 7.65 5.863 7.862Q5.65 8.075 5.65 8.4V12.6Q5.65 12.925 5.863 13.137Q6.075 13.35 6.4 13.35ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialFeaturedVideoRoundedW100Filled.displayName = 'AmauiIconMaterialFeaturedVideoRoundedW100Filled';

export default IconMaterialFeaturedVideoRoundedW100Filled;
