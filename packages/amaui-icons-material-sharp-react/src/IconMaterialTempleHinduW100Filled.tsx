import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTempleHinduW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleHinduW100Filled'

      short_name='TempleHindu'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.3 7.65 1.325-4.425V1.65h.7v2h3.325v-2h.7V3.1l1.35 4.55Zm-5.65 13.7v-9.7h.7v2h3.125l.4-1.3h10.25l.4 1.3h3.125v-2h.7v9.7h-7.7v-5h-3.3v5Zm4.45-9.7.975-3.3h7.85l.975 3.3Z"/>
    </Icon>
  );
});

IconMaterialTempleHinduW100Filled.displayName = 'AmauiIconMaterialTempleHinduW100Filled';

export default IconMaterialTempleHinduW100Filled;
