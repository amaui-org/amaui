import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAmpStoriesSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmpStoriesSharp'
      short_name='AmpStories'

      {...props}
    >
      <path d="M7 20V4H17V20ZM3 18V6H5V18ZM19 18V6H21V18ZM9 18H15V6H9ZM9 18V6V18Z"/>
    </Icon>
  )
});

export default IconMaterialAmpStoriesSharp;
