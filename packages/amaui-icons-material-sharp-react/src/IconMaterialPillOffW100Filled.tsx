import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPillOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PillOffW100Filled'

      short_name='PillOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M657 643 413 399l79-80q25-24 56.5-37.5T615 268q72 0 122.5 50.5T788 441q0 35-13.5 66.5T737 564l-80 79Zm131 285L580 720 468 833q-24 24-56 37.5T345 884q-72 0-122.5-50.5T172 711q0-35 13.5-67t37.5-56l113-112-204-204 20-20 656 656-20 20Z"/>
    </Icon>
  );
});

IconMaterialPillOffW100Filled.displayName = 'AmauiIconMaterialPillOffW100Filled';

export default IconMaterialPillOffW100Filled;
