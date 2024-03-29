import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicOffFilled'

      short_name='MicOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.75 14.95 16.3 13.5q.35-.575.525-1.2Q17 11.675 17 11h2q0 1.1-.325 2.087-.325.988-.925 1.863Zm-2.95-3L9 6.15V5q0-1.25.875-2.125T12 2q1.25 0 2.125.875T15 5v6q0 .275-.062.5-.063.225-.138.45ZM11 21v-3.1q-2.6-.35-4.3-2.312Q5 13.625 5 11h2q0 2.075 1.463 3.537Q9.925 16 12 16q.85 0 1.613-.262.762-.263 1.387-.738l1.425 1.425q-.725.575-1.587.962-.863.388-1.838.513V21Zm8.8 1.6L1.4 4.2l1.4-1.4 18.4 18.4Z"/>
    </Icon>
  );
});

IconMaterialMicOffFilled.displayName = 'AmauiIconMaterialMicOffFilled';

export default IconMaterialMicOffFilled;
