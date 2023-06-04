import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPenSize3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PenSize3W100Filled'

      short_name='PenSize3'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M236 820q-10-10-10-24t10-24l441-440q10-10 23.5-10t23.5 10q10 10 10 24t-10 24L284 820q-10 10-24 10t-24-10Z"/>
    </Icon>
  );
});

IconMaterialPenSize3W100Filled.displayName = 'AmauiIconMaterialPenSize3W100Filled';

export default IconMaterialPenSize3W100Filled;
