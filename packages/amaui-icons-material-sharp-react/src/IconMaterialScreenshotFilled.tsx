import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotFilled'

      short_name='Screenshot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 11V7h4v1.5H9.5V11Zm4 6v-1.5h2.5V13H16v4Zm-7 6V1h14v22Zm2-5h10V6H7Z"/>
    </Icon>
  );
});

IconMaterialScreenshotFilled.displayName = 'AmauiIconMaterialScreenshotFilled';

export default IconMaterialScreenshotFilled;
