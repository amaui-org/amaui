import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDownloadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadW100Filled'

      short_name='Download'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 15-3.1-3.1.5-.5 2.25 2.25v-8.8h.7v8.8l2.25-2.25.5.5Zm-6.7 3.7V15H6v3h12v-3h.7v3.7Z"/>
    </Icon>
  );
});

IconMaterialDownloadW100Filled.displayName = 'AmauiIconMaterialDownloadW100Filled';

export default IconMaterialDownloadW100Filled;
