import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDownloadDoneSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadDoneSharpW100'
      short_name='DownloadDone'

      {...props}
    >
      <path d="M5.65 19.35V18.65H18.35V19.35ZM9.55 15.1 4.8 10.35 5.3 9.85 9.55 14.1 18.7 4.95 19.2 5.45Z"/>
    </Icon>
  );
});

IconMaterialDownloadDoneSharpW100.displayName = 'AmauiIconMaterialDownloadDoneSharpW100';

export default IconMaterialDownloadDoneSharpW100;
