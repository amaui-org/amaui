import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFeaturedVideo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedVideo'

      short_name='FeaturedVideo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 14h9V7H5Zm-3 6V4h20v16Zm2-2V6ZM4 6v12h16V6Z"/>
    </Icon>
  );
});

IconMaterialFeaturedVideo.displayName = 'AmauiIconMaterialFeaturedVideo';

export default IconMaterialFeaturedVideo;
