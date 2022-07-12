import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeaturedVideoSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedVideoSharpW100'
      short_name='FeaturedVideo'

      {...props}
    >
      <path d="M5.65 13.35H13.35V7.65H5.65ZM3.3 18.7V5.3H20.7V18.7ZM4 18V6ZM4 6V18H20V6Z"/>
    </Icon>
  )
});

export default IconMaterialFeaturedVideoSharpW100;
