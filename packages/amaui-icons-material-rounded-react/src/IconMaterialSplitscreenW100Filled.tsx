import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenW100Filled'

      short_name='Splitscreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 11q-.65 0-1.075-.425Q5.3 10.15 5.3 9.5V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v4.7q0 .65-.425 1.075Q17.85 11 17.2 11Zm0 9.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2v-4.7q0-.65.425-1.075Q6.15 13 6.8 13h10.4q.65 0 1.075.425.425.425.425 1.075v4.7q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenW100Filled.displayName = 'AmauiIconMaterialSplitscreenW100Filled';

export default IconMaterialSplitscreenW100Filled;
