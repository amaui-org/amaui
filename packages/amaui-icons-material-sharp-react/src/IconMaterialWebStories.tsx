import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebStories = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebStories'

      short_name='WebStories'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 20V4h2v16ZM2 22V2h13v20Zm19-4V6h1.5v12ZM4 20h9V4H4ZM4 4v16Z"/>
    </Icon>
  );
});

IconMaterialWebStories.displayName = 'AmauiIconMaterialWebStories';

export default IconMaterialWebStories;
