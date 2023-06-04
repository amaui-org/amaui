import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImageAspectRatioW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageAspectRatioW100Filled'

      short_name='ImageAspectRatio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.75 12h1.5v-1.5h-1.5Zm0 3.75h1.5v-1.5h-1.5ZM6.25 12h1.5v-1.5h-1.5ZM10 12h1.5v-1.5H10Zm-6.7 6.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialImageAspectRatioW100Filled.displayName = 'AmauiIconMaterialImageAspectRatioW100Filled';

export default IconMaterialImageAspectRatioW100Filled;
