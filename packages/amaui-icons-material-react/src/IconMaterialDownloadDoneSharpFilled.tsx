import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDownloadDoneSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadDoneSharpFilled'
      short_name='DownloadDone'

      {...props}
    >
      <path d="M5 20V18H19V20ZM9.55 16 3.85 10.3 5.275 8.875 9.55 13.15 18.725 3.975 20.15 5.4Z"/>
    </Icon>
  );
});

IconMaterialDownloadDoneSharpFilled.displayName = 'AmauiIconMaterialDownloadDoneSharpFilled';

export default IconMaterialDownloadDoneSharpFilled;
