import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPenSize4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PenSize4W100Filled'

      short_name='PenSize4'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M247 809q-22-22-22-53.221 0-31.222 22-52.779l360-360q21.557-22 52.779-22Q691 321 713 343q22 22 22 53.221 0 31.222-22 52.779L353 809q-21.558 22-52.779 22Q269 831 247 809Z"/>
    </Icon>
  );
});

IconMaterialPenSize4W100Filled.displayName = 'AmauiIconMaterialPenSize4W100Filled';

export default IconMaterialPenSize4W100Filled;
