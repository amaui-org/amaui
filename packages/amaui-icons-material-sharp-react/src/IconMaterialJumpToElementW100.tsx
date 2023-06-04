import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJumpToElementW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JumpToElementW100'

      short_name='JumpToElement'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M461 595V487h28v80h80v28H461Zm280 0v-28h80v-80h28v108H741ZM461 315V207h108v28h-80v80h-28Zm360 0v-80h-80v-28h108v108h-28ZM131 945l-20-20 250-250H141v-28h268v268h-28V695L131 945Z"/>
    </Icon>
  );
});

IconMaterialJumpToElementW100.displayName = 'AmauiIconMaterialJumpToElementW100';

export default IconMaterialJumpToElementW100;
