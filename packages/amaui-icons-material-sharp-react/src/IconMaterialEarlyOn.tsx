import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEarlyOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarlyOn'

      short_name='EarlyOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 19q-1.25 0-2.125-.875T14 16q0-1.25.875-2.125T17 13q1.25 0 2.125.875T20 16q0 1.25-.875 2.125T17 19Zm-.75-7v-2h1.5v2Zm0 10v-2h1.5v2Zm4.125-8.325-1.075-1.05 1.425-1.425 1.05 1.075Zm-7.1 7.1-1.05-1.05L13.65 18.3l1.05 1.05ZM21 16.75v-1.5h2v1.5Zm-10 0v-1.5h2v1.5Zm9.725 4.025-1.4-1.425 1.05-1.05 1.425 1.4Zm-7.1-7.075-1.4-1.425 1.05-1.05 1.425 1.4ZM3 20V2h3V0h2v2h8V0h2v2h3v6H5v10h4v2ZM5 6h14V4H5Zm0 0V4v2Z"/>
    </Icon>
  );
});

IconMaterialEarlyOn.displayName = 'AmauiIconMaterialEarlyOn';

export default IconMaterialEarlyOn;
