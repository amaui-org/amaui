import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarryOnBagCheckedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagCheckedW100'

      short_name='CarryOnBagChecked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m656-218-46-46q-4-4-9.5-4.5T590-264q-5 5-5 10t5 10l45 45q9 9 21 9t21-9l101-101q4-4 4.5-9.5T778-320q-5-5-10-5t-10 5L656-218Zm-270 18v-400h-34q-14 0-23 9t-9 23v336q0 14 9 23t23 9h34Zm86 28H352q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h208v-172h-46q-6 0-10-4t-4-10q0-6 4-10t10-4h44q13 0 21.5 8.5T588-798v335q-6 3-14.5 7.5T560-447v-153H414v400h49l4 14q2 7 5 14Zm212-232q62 0 105 43t43 105q0 62-43 105t-105 43q-62 0-105-43t-43-105q0-62 43-105t105-43Zm-284 4Zm-14 200v-400 400Zm28 0v-400 400Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagCheckedW100.displayName = 'AmauiIconMaterialCarryOnBagCheckedW100';

export default IconMaterialCarryOnBagCheckedW100;
