import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGasMeterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GasMeterW100'

      short_name='GasMeter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V5.3h4.35v-2h.7v2h3.3v-2h.7v2h4.35v15.4ZM6 20h12V6H6ZM8.65 9.35h6.7v-.7h-6.7ZM12 17.125q.75 0 1.275-.525.525-.525.525-1.25 0-.575-.337-1-.338-.425-1.463-1.725-1.125 1.3-1.462 1.725-.338.425-.338 1 0 .725.525 1.25t1.275.525ZM6 20V6v14Z"/>
    </Icon>
  );
});

IconMaterialGasMeterW100.displayName = 'AmauiIconMaterialGasMeterW100';

export default IconMaterialGasMeterW100;
