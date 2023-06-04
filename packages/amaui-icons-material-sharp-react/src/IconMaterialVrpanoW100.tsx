import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVrpanoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VrpanoW100'

      short_name='Vrpano'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 14.7q1.25-.125 2.525-.188Q10.6 14.45 12 14.45t2.675.062q1.275.063 2.525.188L14 10.85l-2.625 3.125-2-2.4ZM4 17.65q1.95-.575 3.963-.862Q9.975 16.5 12 16.5t4.038.288q2.012.287 3.962.862V6.4q-1.95.575-3.962.837Q14.025 7.5 12 7.5q-2.025 0-4.037-.263Q5.95 6.975 4 6.4Zm8-5.625ZM3.3 18.55V5.5q2.025.575 4.038.962Q9.35 6.85 12 6.85t4.663-.388q2.012-.387 4.037-.962v13.05q-2.025-.575-4.037-.937Q14.65 17.25 12 17.25q-2.65 0-4.662.363-2.013.362-4.038.937Z"/>
    </Icon>
  );
});

IconMaterialVrpanoW100.displayName = 'AmauiIconMaterialVrpanoW100';

export default IconMaterialVrpanoW100;
