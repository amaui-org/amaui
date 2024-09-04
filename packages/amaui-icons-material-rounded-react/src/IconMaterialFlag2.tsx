import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlag2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Flag2'

      short_name='Flag2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-440v320q0 17-11.5 28.5T240-80q-17 0-28.5-11.5T200-120v-680q0-17 11.5-28.5T240-840h541q11 0 19.5 5t13.5 13q5 8 6.5 17.5T818-785l-58 145 58 145q4 10 2.5 19.5T814-458q-5 8-13.5 13t-19.5 5H280Zm0-80h442l-36-90q-6-14-6-30t6-30l36-90H280v240Zm0 0v-240 240Z"/>
    </Icon>
  );
});

IconMaterialFlag2.displayName = 'AmauiIconMaterialFlag2';

export default IconMaterialFlag2;
