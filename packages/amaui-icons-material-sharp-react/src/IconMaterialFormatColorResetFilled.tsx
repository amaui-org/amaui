import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatColorResetFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorResetFilled'

      short_name='FormatColorReset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.25 16.4 8.4 5.55 12 2l5.65 5.55q1.1 1.05 1.725 2.487Q20 11.475 20 13.1q0 .9-.2 1.725-.2.825-.55 1.575Zm.55 6.2-3.1-3.1q-1.025.725-2.2 1.113Q13.325 21 12 21q-3.325 0-5.662-2.312Q4 16.375 4 13.1q0-1.275.4-2.45.4-1.175 1.2-2.25L1.4 4.2l1.4-1.4 18.4 18.4Z"/>
    </Icon>
  );
});

IconMaterialFormatColorResetFilled.displayName = 'AmauiIconMaterialFormatColorResetFilled';

export default IconMaterialFormatColorResetFilled;
