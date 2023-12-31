import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFinanceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FinanceFilled'

      short_name='Finance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h80v640h640v80H120Zm120-120v-360h160v360H240Zm200 0v-560h160v560H440Zm200 0v-200h160v200H640Z"/>
    </Icon>
  );
});

IconMaterialFinanceFilled.displayName = 'AmauiIconMaterialFinanceFilled';

export default IconMaterialFinanceFilled;
