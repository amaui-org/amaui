import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDownloadTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadTwoTone'
      short_name='Download'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 9V5h-2v6H9.83L12 13.17 14.17 11H13z" opacity=".3"/><path d="M15 9V3H9v6H5l7 7 7-7h-4zm-3 4.17L9.83 11H11V5h2v6h1.17L12 13.17zM5 18h14v2H5z"/>
    </Icon>
  );
});

IconMaterialDownloadTwoTone.displayName = 'AmauiIconMaterialDownloadTwoTone';

export default IconMaterialDownloadTwoTone;
