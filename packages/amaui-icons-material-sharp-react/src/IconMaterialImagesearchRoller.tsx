import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImagesearchRoller = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImagesearchRoller'

      short_name='ImagesearchRoller'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 23v-8h2v-3H2V4h4V2h14v6H6V6H4v4h10v5h2v8ZM8 4v2Zm4 17h2-2Zm0 0h2v-4h-2ZM8 6h10V4H8Z"/>
    </Icon>
  );
});

IconMaterialImagesearchRoller.displayName = 'AmauiIconMaterialImagesearchRoller';

export default IconMaterialImagesearchRoller;
