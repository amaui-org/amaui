import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallEndW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallEndW100Filled'

      short_name='CallEnd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.1 16.175 1.325 13.45q2.25-2.4 5.025-3.6 2.775-1.2 5.675-1.2t5.675 1.2q2.775 1.2 5.025 3.6l-2.775 2.725-3.275-2.475v-3.5q-1.2-.425-2.375-.638-1.175-.212-2.275-.212-1.1 0-2.275.212-1.175.213-2.375.638v3.5Z"/>
    </Icon>
  );
});

IconMaterialCallEndW100Filled.displayName = 'AmauiIconMaterialCallEndW100Filled';

export default IconMaterialCallEndW100Filled;
