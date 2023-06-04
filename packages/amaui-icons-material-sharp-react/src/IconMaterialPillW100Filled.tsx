import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPillW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PillW100Filled'

      short_name='Pill'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m613 688 124-124q24-24 37.5-55.961Q788 476.079 788 441q0-72.276-50.459-122.638Q687.081 268 614.667 268 580 268 548 281.5T492 319L368 443l245 245ZM345.333 884Q380 884 412 870.5t56-37.5l124-124-245-245-124 124q-24 24-37.5 55.961Q172 675.921 172 711q0 72.276 50.459 122.638Q272.919 884 345.333 884Z"/>
    </Icon>
  );
});

IconMaterialPillW100Filled.displayName = 'AmauiIconMaterialPillW100Filled';

export default IconMaterialPillW100Filled;
