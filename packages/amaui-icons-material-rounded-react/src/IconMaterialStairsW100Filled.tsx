import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStairsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StairsW100Filled'

      short_name='Stairs'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17.35h2.775v-3.325h2.575V10.7h2.575V7.35H17q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.775v3.325H11.65V13.3H9.075v3.35H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialStairsW100Filled.displayName = 'AmauiIconMaterialStairsW100Filled';

export default IconMaterialStairsW100Filled;
