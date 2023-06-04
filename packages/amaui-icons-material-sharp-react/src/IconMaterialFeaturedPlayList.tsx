import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFeaturedPlayList = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedPlayList'

      short_name='FeaturedPlayList'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm2-2h16V6H4Zm2-5h9v-2H6Zm0-3h9V8H6ZM4 6v12Z"/>
    </Icon>
  );
});

IconMaterialFeaturedPlayList.displayName = 'AmauiIconMaterialFeaturedPlayList';

export default IconMaterialFeaturedPlayList;
