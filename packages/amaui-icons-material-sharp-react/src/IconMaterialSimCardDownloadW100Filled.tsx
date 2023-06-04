import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSimCardDownloadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardDownloadW100Filled'

      short_name='SimCardDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V8.55l5.25-5.25h8.15v17.4Zm6.7-4.85 3.1-3.1-.5-.5-2.25 2.2v-4.8h-.7v4.8l-2.25-2.2-.5.5Z"/>
    </Icon>
  );
});

IconMaterialSimCardDownloadW100Filled.displayName = 'AmauiIconMaterialSimCardDownloadW100Filled';

export default IconMaterialSimCardDownloadW100Filled;
