import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSdCard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCard'

      short_name='SdCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 11h2V7H9Zm3 0h2V7h-2Zm3 0h2V7h-2ZM4 22V8l6-6h10v20Zm2-2h12V4h-7.15L6 8.85Zm0 0h12Z"/>
    </Icon>
  );
});

IconMaterialSdCard.displayName = 'AmauiIconMaterialSdCard';

export default IconMaterialSdCard;
