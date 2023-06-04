import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagicButton = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagicButton'

      short_name='MagicButton'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 19-2.5-5.5L2 11l5.5-2.5L10 3l2.5 5.5L18 11l-5.5 2.5Zm8 2-1.25-2.75L14 17l2.75-1.25L18 13l1.25 2.75L22 17l-2.75 1.25Z"/>
    </Icon>
  );
});

IconMaterialMagicButton.displayName = 'AmauiIconMaterialMagicButton';

export default IconMaterialMagicButton;
