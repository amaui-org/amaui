import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileDownloadDoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadDoneW100'

      short_name='FileDownloadDone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.025 19.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm3.55-4.55q-.15 0-.275-.05-.125-.05-.25-.175L5.075 10.6q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l4 4 8.9-8.9q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25L10.1 14.575q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadDoneW100.displayName = 'AmauiIconMaterialFileDownloadDoneW100';

export default IconMaterialFileDownloadDoneW100;
