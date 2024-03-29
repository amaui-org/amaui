import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAtr = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Atr'

      short_name='Atr'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20q-1.25 0-2.125-.875T3 17q0-1.25.875-2.125T6 14q1.25 0 2.125.875T9 17q0 1.25-.875 2.125T6 20Zm12 0q-1.25 0-2.125-.875T15 17q0-1.25.875-2.125T18 14q1.25 0 2.125.875T21 17q0 1.25-.875 2.125T18 20Zm-6-10q-1.25 0-2.125-.875T9 7q0-1.25.875-2.125T12 4q1.25 0 2.125.875T15 7q0 1.25-.875 2.125T12 10Z"/>
    </Icon>
  );
});

IconMaterialAtr.displayName = 'AmauiIconMaterialAtr';

export default IconMaterialAtr;
