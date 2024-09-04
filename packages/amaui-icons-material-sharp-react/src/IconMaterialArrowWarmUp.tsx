import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowWarmUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowWarmUp'

      short_name='ArrowWarmUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-727 256-544l-56-56 280-280 280 280-56 57-184-184v287h-80v-287Zm0 487v-120h80v120h-80Zm0 160v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialArrowWarmUp.displayName = 'AmauiIconMaterialArrowWarmUp';

export default IconMaterialArrowWarmUp;
