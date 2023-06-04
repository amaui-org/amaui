import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFeaturedPlayListFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedPlayListFilled'

      short_name='FeaturedPlayList'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 13h9v-2H6Zm0-3h9V8H6ZM2 20V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialFeaturedPlayListFilled.displayName = 'AmauiIconMaterialFeaturedPlayListFilled';

export default IconMaterialFeaturedPlayListFilled;
