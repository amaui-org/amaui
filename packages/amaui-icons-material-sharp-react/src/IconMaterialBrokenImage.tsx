import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrokenImage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImage'

      short_name='BrokenImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm3-8.425 4-4 4 4 4-4 1 1V5H5v6.575ZM5 19h14v-6.6l-1-1-4 4-4-4-4 4-1-1Zm0 0v-6.6 2V5v9.4Z"/>
    </Icon>
  );
});

IconMaterialBrokenImage.displayName = 'AmauiIconMaterialBrokenImage';

export default IconMaterialBrokenImage;
