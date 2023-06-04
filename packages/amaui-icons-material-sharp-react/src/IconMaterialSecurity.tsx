import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSecurity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Security'

      short_name='Security'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-3.475-.875-5.737-3.988Q4 14.9 4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.912Q15.475 21.125 12 22Zm0-2.1q2.425-.75 4.05-2.962 1.625-2.213 1.9-4.938H12V4.125l-6 2.25v5.175q0 .175.05.45H12Z"/>
    </Icon>
  );
});

IconMaterialSecurity.displayName = 'AmauiIconMaterialSecurity';

export default IconMaterialSecurity;
