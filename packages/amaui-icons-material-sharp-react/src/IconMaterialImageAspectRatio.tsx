import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImageAspectRatio = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageAspectRatio'

      short_name='ImageAspectRatio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 12h2v-2h-2Zm0 4h2v-2h-2Zm-8-4h2v-2H6Zm4 0h2v-2h-2Zm-8 8V4h20v16Zm2-2h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialImageAspectRatio.displayName = 'AmauiIconMaterialImageAspectRatio';

export default IconMaterialImageAspectRatio;
