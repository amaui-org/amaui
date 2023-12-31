import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarryOnBagCheckedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagCheckedW100Filled'

      short_name='CarryOnBagChecked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m656-218-46-46q-4-4-9.5-4.5T590-264q-5 5-5 10t5 10l45 45q9 9 21 9t21-9l101-101q4-4 4.5-9.5T778-320q-5-5-10-5t-10 5L656-218Zm28 110q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm-270-64v-456h146v-172h-46q-6 0-10-4t-4-10q0-6 4-10t10-4h44q13 0 21.5 8.5T588-798v335q-59 30-95.5 84.5T456-258q0 22 3.5 44t12.5 42h-58Zm-62 0q-25 0-42.5-17.5T292-232v-336q0-25 17.5-42.5T352-628h34v456h-34Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagCheckedW100Filled.displayName = 'AmauiIconMaterialCarryOnBagCheckedW100Filled';

export default IconMaterialCarryOnBagCheckedW100Filled;
