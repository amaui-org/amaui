import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlipToFrontFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToFrontFilled'

      short_name='FlipToFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 13v-2h2v2Zm0 4v-2h2v2Zm0 4v-2h2v2ZM3 9V7h2v2Zm12 12v-2h2v2Zm-8-4V3h14v14Zm2-2h10V5H9Zm2 6v-2h2v2Zm-4 0v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialFlipToFrontFilled.displayName = 'AmauiIconMaterialFlipToFrontFilled';

export default IconMaterialFlipToFrontFilled;
