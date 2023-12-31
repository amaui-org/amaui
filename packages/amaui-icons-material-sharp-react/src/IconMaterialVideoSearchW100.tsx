import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoSearchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoSearchW100'

      short_name='VideoSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M778-164 528-414q-30 26-69 40t-77 14q-92 0-156-64t-64-156q0-92 64-156t156-64q92 0 156 64t64 156q0 41-15 80t-39 66l250 250-20 20ZM382-388q81 0 136.5-55.5T574-580q0-81-55.5-136.5T382-772q-81 0-136.5 55.5T190-580q0 81 55.5 136.5T382-388Zm-48-114v-156l126 78-126 78Z"/>
    </Icon>
  );
});

IconMaterialVideoSearchW100.displayName = 'AmauiIconMaterialVideoSearchW100';

export default IconMaterialVideoSearchW100;
