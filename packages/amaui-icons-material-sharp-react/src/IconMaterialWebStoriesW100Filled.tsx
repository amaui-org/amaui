import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebStoriesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebStoriesW100Filled'

      short_name='WebStories'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.15 19.475V4.5h1.2v14.975ZM5.75 21V3h11.7v18Zm14.3-3.025V6h.7v11.975Z"/>
    </Icon>
  );
});

IconMaterialWebStoriesW100Filled.displayName = 'AmauiIconMaterialWebStoriesW100Filled';

export default IconMaterialWebStoriesW100Filled;
