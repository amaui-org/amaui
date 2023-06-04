import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectMoveDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveDownW100'

      short_name='TextSelectMoveDown'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M186 296q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h588q5.95 0 9.975 4.035 4.025 4.035 4.025 10T783.975 292q-4.025 4-9.975 4H186Zm273 423-93-93q-4-4-4.5-9.5t4.717-10.717Q371 601 376 601.5q5 .5 10 4.5l80 79V416q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v269l80-79q4-4 9.5-4.5t10.717 4.717Q599 611 599 616q0 5-5 10l-93 93q-9 9-21 9t-21-9ZM186 884q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h588q5.95 0 9.975 4.035 4.025 4.035 4.025 10T783.975 880q-4.025 4-9.975 4H186Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveDownW100.displayName = 'AmauiIconMaterialTextSelectMoveDownW100';

export default IconMaterialTextSelectMoveDownW100;
