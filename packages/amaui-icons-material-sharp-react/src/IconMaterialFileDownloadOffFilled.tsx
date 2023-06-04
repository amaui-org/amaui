import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileDownloadOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadOffFilled'

      short_name='FileDownloadOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m2.8 2.8 18.4 18.4-1.425 1.425L17.15 20H6q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h9.15l-2.575-2.575L12 16l-5-5 .575-.575-6.2-6.2Zm12.8 6.75L17 11l-1.575 1.575L14 11.15ZM13 4v6.15l-2-2V4Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadOffFilled.displayName = 'AmauiIconMaterialFileDownloadOffFilled';

export default IconMaterialFileDownloadOffFilled;
