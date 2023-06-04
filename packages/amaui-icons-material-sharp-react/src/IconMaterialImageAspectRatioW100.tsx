import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImageAspectRatioW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageAspectRatioW100'

      short_name='ImageAspectRatio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.75 12h1.5v-1.5h-1.5Zm0 3.75h1.5v-1.5h-1.5ZM6.25 12h1.5v-1.5h-1.5ZM10 12h1.5v-1.5H10Zm-6.7 6.7V5.3h17.4v13.4ZM4 18h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialImageAspectRatioW100.displayName = 'AmauiIconMaterialImageAspectRatioW100';

export default IconMaterialImageAspectRatioW100;
