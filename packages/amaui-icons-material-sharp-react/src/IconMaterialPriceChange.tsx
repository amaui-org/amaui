import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPriceChange = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceChange'

      short_name='PriceChange'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17h2v-1h2v-5H8v-1h4V8h-2V7H8v1H6v5h4v1H6v2h2Zm8-.75 2-2h-4ZM14 10h4l-2-2ZM2 20V4h20v16Zm2-2h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialPriceChange.displayName = 'AmauiIconMaterialPriceChange';

export default IconMaterialPriceChange;
