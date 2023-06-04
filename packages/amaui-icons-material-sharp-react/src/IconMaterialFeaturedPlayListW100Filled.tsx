import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFeaturedPlayListW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedPlayListW100Filled'

      short_name='FeaturedPlayList'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 12.35h7.7v-.7h-7.7Zm0-3h7.7v-.7h-7.7ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialFeaturedPlayListW100Filled.displayName = 'AmauiIconMaterialFeaturedPlayListW100Filled';

export default IconMaterialFeaturedPlayListW100Filled;
