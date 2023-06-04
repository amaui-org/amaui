import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPulmonologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PulmonologyFilled'

      short_name='Pulmonology'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 2h2v7.6l3 3 1.05-1.05L14.525 9V5H18.7l3.3 8.825V21h-9v-5l.4-3.2-1.4-1.4-1.4 1.4.4 3.2v5H2v-7.175L5.3 5h4.2v4l-2.55 2.55L8 12.6l3-3Z"/>
    </Icon>
  );
});

IconMaterialPulmonologyFilled.displayName = 'AmauiIconMaterialPulmonologyFilled';

export default IconMaterialPulmonologyFilled;
