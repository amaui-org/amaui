import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFontDownloadOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadOffW100'

      short_name='FontDownloadOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-1.6-1.6H3.3V4.3L2.25 3.25l.5-.5L21.8 21.8ZM4 20h15L4 5Zm16.7-2.1-.7-.7V4H6.8l-.7-.7h14.6Zm-7.25-7.25Zm-1.9 1.9Zm2.475-1.325L12.9 10.1l-.85-2.4h-.1l-.375 1.075-.525-.525.7-2h.5ZM7.75 17.45l2.55-7.15.525.525L9.8 13.75h3.95l.7.7h-4.9l-1.05 3Zm7.75 0-1.05-3 1.125 1.125.675 1.875Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadOffW100.displayName = 'AmauiIconMaterialFontDownloadOffW100';

export default IconMaterialFontDownloadOffW100;
