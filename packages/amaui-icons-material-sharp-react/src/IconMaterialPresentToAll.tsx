import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPresentToAll = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PresentToAll'

      short_name='PresentToAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 16h2v-4.15l1.6 1.575L16.025 12 12 8l-4 4 1.425 1.4L11 11.825Zm-9 4V4h20v16Zm2-2h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialPresentToAll.displayName = 'AmauiIconMaterialPresentToAll';

export default IconMaterialPresentToAll;
