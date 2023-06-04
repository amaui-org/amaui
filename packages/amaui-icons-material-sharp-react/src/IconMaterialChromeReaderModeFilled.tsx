import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeReaderModeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeReaderModeFilled'

      short_name='ChromeReaderMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm11-2h7V6h-7Zm1-8h5V8.5h-5Zm0 2.5h5V11h-5Zm0 2.5h5v-1.5h-5Z"/>
    </Icon>
  );
});

IconMaterialChromeReaderModeFilled.displayName = 'AmauiIconMaterialChromeReaderModeFilled';

export default IconMaterialChromeReaderModeFilled;
