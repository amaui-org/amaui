import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPresentToAllW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PresentToAllW100Filled'

      short_name='PresentToAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.1q.15 0 .25-.1t.1-.25v-4.5l2.025 2.025q.1.1.225.1t.25-.125q.125-.125.125-.25t-.125-.25l-2.325-2.325q-.125-.125-.25-.175Q12.15 9.2 12 9.2q-.15 0-.275.05-.125.05-.25.175l-2.35 2.35q-.1.1-.1.225t.125.25q.125.125.25.125t.25-.125l2-2v4.5q0 .15.1.25t.25.1Zm-7.2 3.6q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialPresentToAllW100Filled.displayName = 'AmauiIconMaterialPresentToAllW100Filled';

export default IconMaterialPresentToAllW100Filled;
