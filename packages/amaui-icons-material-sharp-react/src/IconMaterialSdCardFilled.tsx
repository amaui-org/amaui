import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSdCardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardFilled'

      short_name='SdCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 11h2V7H9Zm3 0h2V7h-2Zm3 0h2V7h-2ZM4 22V8l6-6h10v20Z"/>
    </Icon>
  );
});

IconMaterialSdCardFilled.displayName = 'AmauiIconMaterialSdCardFilled';

export default IconMaterialSdCardFilled;
