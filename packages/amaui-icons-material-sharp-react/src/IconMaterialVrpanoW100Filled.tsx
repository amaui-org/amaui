import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVrpanoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VrpanoW100Filled'

      short_name='Vrpano'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 14.7q1.25-.125 2.525-.188Q10.6 14.45 12 14.45t2.675.062q1.275.063 2.525.188L14 10.85l-2.625 3.125-2-2.4Zm-3.5 3.85V5.5q2.025.575 4.038.962Q9.35 6.85 12 6.85t4.663-.388q2.012-.387 4.037-.962v13.05q-2.025-.575-4.037-.937Q14.65 17.25 12 17.25q-2.65 0-4.662.363-2.013.362-4.038.937Z"/>
    </Icon>
  );
});

IconMaterialVrpanoW100Filled.displayName = 'AmauiIconMaterialVrpanoW100Filled';

export default IconMaterialVrpanoW100Filled;
