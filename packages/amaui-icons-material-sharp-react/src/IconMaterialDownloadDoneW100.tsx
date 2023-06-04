import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDownloadDoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadDoneW100'

      short_name='DownloadDone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 19.35v-.7h12.7v.7Zm3.9-4.25L4.8 10.35l.5-.5 4.25 4.25 9.15-9.15.5.5Z"/>
    </Icon>
  );
});

IconMaterialDownloadDoneW100.displayName = 'AmauiIconMaterialDownloadDoneW100';

export default IconMaterialDownloadDoneW100;
