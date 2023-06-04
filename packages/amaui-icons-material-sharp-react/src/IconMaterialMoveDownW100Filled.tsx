import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveDownW100Filled'

      short_name='MoveDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.025 20.075-.5-.5 2.2-2.2q-2.9 0-4.987-1.775Q1.65 13.825 1.65 11q0-2.65 1.85-4.5T8 4.65h2.35v.7H8Q5.65 5.35 4 7t-1.65 4q0 2.475 1.775 4.038Q5.9 16.6 8.775 16.675l-2.25-2.25.5-.5L10.1 17Zm6.625-.725v-5.7h7.7v5.7Zm0-9v-5.7h7.7v5.7Zm.7-.7h6.3v-4.3h-6.3Z"/>
    </Icon>
  );
});

IconMaterialMoveDownW100Filled.displayName = 'AmauiIconMaterialMoveDownW100Filled';

export default IconMaterialMoveDownW100Filled;
