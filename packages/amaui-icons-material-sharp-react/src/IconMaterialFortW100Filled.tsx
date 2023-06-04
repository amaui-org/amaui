import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFortW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FortW100Filled'

      short_name='Fort'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.65 20.35v-3.075l2-2v-6.55l-2-2V3.65h.7v2h3.3v-2h.7v2h3.3v-2h.7v3.075l-2 2v1.925h7.3V8.725l-2-2V3.65h.7v2h3.3v-2h.7v2h3.3v-2h.7v3.075l-2 2v6.55l2 2v3.075h-7.7v-5h-5.3v5Z"/>
    </Icon>
  );
});

IconMaterialFortW100Filled.displayName = 'AmauiIconMaterialFortW100Filled';

export default IconMaterialFortW100Filled;
