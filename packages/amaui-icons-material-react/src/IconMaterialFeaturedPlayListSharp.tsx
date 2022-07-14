import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeaturedPlayListSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedPlayListSharp'
      short_name='FeaturedPlayList'

      {...props}
    >
      <path d="M2 20V4H22V20ZM4 18H20V6H4ZM6 13H15V11H6ZM6 10H15V8H6ZM4 6V18Z"/>
    </Icon>
  );
});

export default IconMaterialFeaturedPlayListSharp;
