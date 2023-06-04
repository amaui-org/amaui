import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSimCardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardFilled'

      short_name='SimCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 19h2v-2H7Zm8 0h2v-2h-2Zm-8-4h2v-4H7Zm4 4h2v-4h-2Zm0-6h2v-2h-2Zm4 2h2v-4h-2ZM4 22V8l6-6h10v20Z"/>
    </Icon>
  );
});

IconMaterialSimCardFilled.displayName = 'AmauiIconMaterialSimCardFilled';

export default IconMaterialSimCardFilled;
