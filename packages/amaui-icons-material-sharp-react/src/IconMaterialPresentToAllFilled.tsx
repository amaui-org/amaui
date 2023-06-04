import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPresentToAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PresentToAllFilled'

      short_name='PresentToAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 16h2v-4.15l1.6 1.575L16.025 12 12 8l-4 4 1.425 1.4L11 11.825Zm-9 4V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialPresentToAllFilled.displayName = 'AmauiIconMaterialPresentToAllFilled';

export default IconMaterialPresentToAllFilled;
