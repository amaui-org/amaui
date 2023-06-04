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
      <path d="M11.65 15.1h.7v-4.85l2.25 2.25.5-.5L12 8.9 8.9 12l.5.5 2.25-2.25ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialPresentToAllW100Filled.displayName = 'AmauiIconMaterialPresentToAllW100Filled';

export default IconMaterialPresentToAllW100Filled;
