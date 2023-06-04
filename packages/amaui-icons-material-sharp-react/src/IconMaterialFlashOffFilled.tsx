import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOffFilled'

      short_name='FlashOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.85 13-2-2H17Zm-2.6-2.6L7 4.15V2h10ZM10 23v-9H7V9.85L1.4 4.2l1.4-1.4 18.4 18.4-1.4 1.4-6.05-6Z"/>
    </Icon>
  );
});

IconMaterialFlashOffFilled.displayName = 'AmauiIconMaterialFlashOffFilled';

export default IconMaterialFlashOffFilled;
