import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFrontHandW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontHandW100'

      short_name='FrontHand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.7 22.1q-2.9 0-4.7-1.8-1.8-1.8-1.8-4.7V6.3h2.6v-3h2.6V1.8H14v2h2.6v5.35h2.6v6.45q0 2.9-1.8 4.7-1.8 1.8-4.7 1.8Zm0-.7q1.3 0 2.362-.425 1.063-.425 1.826-1.187.762-.763 1.187-1.826.425-1.062.425-2.362V9.85h-1.2v4.3l-.4.1q-1.325.375-2.112 1.238Q14 16.35 13.65 17.6h-1.2q.325-1.65 1.225-2.688.9-1.037 2.225-1.562V4.5h-1.2v7.1h-1.4V2.5h-1.2v9.1h-1.4V4H9.5v8.6H8.1V7H6.9v8.6q0 1.3.425 2.362.425 1.063 1.187 1.826.763.762 1.826 1.187 1.062.425 2.362.425Z"/>
    </Icon>
  );
});

IconMaterialFrontHandW100.displayName = 'AmauiIconMaterialFrontHandW100';

export default IconMaterialFrontHandW100;
