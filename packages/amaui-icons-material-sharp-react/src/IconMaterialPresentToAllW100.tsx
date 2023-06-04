import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPresentToAllW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PresentToAllW100'

      short_name='PresentToAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 15.1h.7v-4.85l2.25 2.25.5-.5L12 8.9 8.9 12l.5.5 2.25-2.25ZM3.3 18.7V5.3h17.4v13.4ZM4 18h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialPresentToAllW100.displayName = 'AmauiIconMaterialPresentToAllW100';

export default IconMaterialPresentToAllW100;
