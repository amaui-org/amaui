import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebStoriesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebStoriesW100'

      short_name='WebStories'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.15 19.475V4.5h1.2v14.975ZM5.75 21V3h11.7v18Zm14.3-3.025V6h.7v11.975ZM6.45 20.3h10.3V3.7H6.45Zm0-16.6v16.6Z"/>
    </Icon>
  );
});

IconMaterialWebStoriesW100.displayName = 'AmauiIconMaterialWebStoriesW100';

export default IconMaterialWebStoriesW100;
