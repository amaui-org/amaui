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
      <path d="M7 12.35h7q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0-3h7q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialFeaturedPlayListW100Filled.displayName = 'AmauiIconMaterialFeaturedPlayListW100Filled';

export default IconMaterialFeaturedPlayListW100Filled;
