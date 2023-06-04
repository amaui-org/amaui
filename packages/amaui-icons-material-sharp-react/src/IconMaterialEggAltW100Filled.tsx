import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEggAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EggAltW100Filled'

      short_name='EggAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 20.7q-1.35 0-2.037-.488-.688-.487-1.163-.987-.575-.625-1.175-1.075-.6-.45-1.65-.45-.925 0-2.087-.338-1.163-.337-2.175-1.075Q4.7 15.55 4 14.375q-.7-1.175-.7-2.85 0-3.475 1.775-5.85Q6.85 3.3 9.975 3.3q1.4 0 2.412.4 1.013.4 1.75 1.037.738.638 1.288 1.413t1 1.5q.4.65.787 1.225.388.575.863 1.05Q19.4 11.25 20.05 12.2q.65.95.65 2.825 0 2.425-1.462 4.05Q17.775 20.7 16 20.7Zm-4-6.5q.9 0 1.55-.65T14.2 12q0-.9-.65-1.55T12 9.8q-.9 0-1.55.65T9.8 12q0 .9.65 1.55t1.55.65Z"/>
    </Icon>
  );
});

IconMaterialEggAltW100Filled.displayName = 'AmauiIconMaterialEggAltW100Filled';

export default IconMaterialEggAltW100Filled;
