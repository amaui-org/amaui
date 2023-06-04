import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImageAspectRatioFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageAspectRatioFilled'

      short_name='ImageAspectRatio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 12h2v-2h-2Zm0 4h2v-2h-2Zm-8-4h2v-2H6Zm4 0h2v-2h-2Zm-8 8V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialImageAspectRatioFilled.displayName = 'AmauiIconMaterialImageAspectRatioFilled';

export default IconMaterialImageAspectRatioFilled;
