import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileDownloadOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadOffW100Filled'

      short_name='FileDownloadOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.65 3.65 16.7 16.7-.5.5-2.2-2.2q-.125.025-.225.038-.1.012-.225.012H6.8q-.65 0-1.075-.425Q5.3 17.85 5.3 17.2V15H6v2.2q0 .3.25.55.25.25.55.25H17l-4-4-1 1-3.1-3.1.5-.5 2 2v-1L3.15 4.15Zm10.95 7.5.5.5-.325.325-.5-.5Zm-2.25-6.3v4.7l-.7-.7v-4Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadOffW100Filled.displayName = 'AmauiIconMaterialFileDownloadOffW100Filled';

export default IconMaterialFileDownloadOffW100Filled;
