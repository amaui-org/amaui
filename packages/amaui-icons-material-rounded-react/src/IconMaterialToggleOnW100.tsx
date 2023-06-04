import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToggleOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToggleOnW100'

      short_name='ToggleOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 16.7q-1.95 0-3.325-1.375Q2.3 13.95 2.3 12q0-1.95 1.375-3.325Q5.05 7.3 7 7.3h10q1.95 0 3.325 1.375Q21.7 10.05 21.7 12q0 1.95-1.375 3.325Q18.95 16.7 17 16.7Zm10-.7q1.65 0 2.825-1.175Q21 13.65 21 12q0-1.65-1.175-2.825Q18.65 8 17 8H7Q5.35 8 4.175 9.175 3 10.35 3 12q0 1.65 1.175 2.825Q5.35 16 7 16Zm0-1.65q.975 0 1.663-.688.687-.687.687-1.662 0-.975-.687-1.663Q17.975 9.65 17 9.65q-.975 0-1.662.687-.688.688-.688 1.663 0 .975.688 1.662.687.688 1.662.688ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialToggleOnW100.displayName = 'AmauiIconMaterialToggleOnW100';

export default IconMaterialToggleOnW100;
