import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightlifeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlifeFilled'

      short_name='Nightlife'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20v-2h2v-4L1 5h14l-6 9v4h2v2Zm.9-11h4.2l1.4-2h-7ZM16 20q-1.25 0-2.125-.875T13 17q0-1.25.875-2.125T16 14q.275 0 .525.037.25.038.475.163V5h5v3h-3v9q0 1.25-.875 2.125T16 20Z"/>
    </Icon>
  );
});

IconMaterialNightlifeFilled.displayName = 'AmauiIconMaterialNightlifeFilled';

export default IconMaterialNightlifeFilled;
