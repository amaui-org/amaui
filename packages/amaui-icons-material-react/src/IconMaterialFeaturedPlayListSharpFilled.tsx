import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeaturedPlayListSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedPlayListSharpFilled'
      short_name='FeaturedPlayList'

      {...props}
    >
      <path d="M6 13H15V11H6ZM6 10H15V8H6ZM2 20V4H22V20Z"/>
    </Icon>
  )
});

export default IconMaterialFeaturedPlayListSharpFilled;
