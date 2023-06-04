import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFontDownloadOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadOffW100Filled'

      short_name='FontDownloadOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.7 17.9-6.675-6.675L12.25 6.25h-.5l-.7 2L6.1 3.3h14.6Zm-7.8-7.8-.85-2.4h-.1l-.375 1.075Zm8.4 12.2-7.85-7.85h1l5.8 5.8v.45H3.3V4.375L2.25 3.25l.5-.5L21.8 21.8ZM7.75 17.45h.75l1.05-3h3.9l-.7-.7H9.8l.775-2.175-.525-.525Zm7.75 0h.75l-.675-1.875-1.125-1.125Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadOffW100Filled.displayName = 'AmauiIconMaterialFontDownloadOffW100Filled';

export default IconMaterialFontDownloadOffW100Filled;
