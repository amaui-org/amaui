import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactsFilled'

      short_name='Contacts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 23v-2h16v2ZM4 3V1h16v2Zm8 10q1.25 0 2.125-.875T15 10q0-1.25-.875-2.125T12 7q-1.25 0-2.125.875T9 10q0 1.25.875 2.125T12 13ZM2 20V4h20v16Zm3.75-2h12.5q-1.125-1.4-2.725-2.2-1.6-.8-3.525-.8-1.925 0-3.525.8-1.6.8-2.725 2.2Z"/>
    </Icon>
  );
});

IconMaterialContactsFilled.displayName = 'AmauiIconMaterialContactsFilled';

export default IconMaterialContactsFilled;
