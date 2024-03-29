import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTamperDetectionOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TamperDetectionOnW100'

      short_name='TamperDetectionOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.675 15.7V15h4.95V3h-12v4.55h-.7V2.3h13.4v6.2l2.75-2.75v6.5l-2.75-2.75v6.2ZM4.9 17.3l-2.125-2.125.525-.525.975.975v-4.95h.7V13.3h.7V9.55h.7v3.75h.7v-3.25h.7v3.25h.7v-2.5h.7v6.5ZM16.625 3v12V3Z"/>
    </Icon>
  );
});

IconMaterialTamperDetectionOnW100.displayName = 'AmauiIconMaterialTamperDetectionOnW100';

export default IconMaterialTamperDetectionOnW100;
