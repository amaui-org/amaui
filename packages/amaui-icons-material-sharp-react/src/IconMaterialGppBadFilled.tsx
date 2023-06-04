import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGppBadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GppBadFilled'

      short_name='GppBad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.9 15.5 2.1-2.1 2.1 2.1 1.4-1.4-2.1-2.1 2.1-2.1-1.4-1.4-2.1 2.1-2.1-2.1-1.4 1.4 2.1 2.1-2.1 2.1ZM12 22q-3.475-.875-5.737-3.988Q4 14.9 4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.912Q15.475 21.125 12 22Z"/>
    </Icon>
  );
});

IconMaterialGppBadFilled.displayName = 'AmauiIconMaterialGppBadFilled';

export default IconMaterialGppBadFilled;
