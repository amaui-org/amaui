import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFinanceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FinanceW100'

      short_name='Finance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-172v-668h28v640h640v28H146Zm166-146v-272h56v272h-56Zm174 0v-472h56v472h-56Zm174 0v-112h56v112h-56Z"/>
    </Icon>
  );
});

IconMaterialFinanceW100.displayName = 'AmauiIconMaterialFinanceW100';

export default IconMaterialFinanceW100;
