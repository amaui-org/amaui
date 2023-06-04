import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebStoriesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebStoriesFilled'

      short_name='WebStories'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 20V4h2v16ZM3 22V2h13v20Zm19-4V6h1.5v12Z"/>
    </Icon>
  );
});

IconMaterialWebStoriesFilled.displayName = 'AmauiIconMaterialWebStoriesFilled';

export default IconMaterialWebStoriesFilled;
