import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSecurityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityW100Filled'

      short_name='Security'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.65q-2.875-.9-4.787-3.55-1.913-2.65-1.913-6V5.9L12 3.4l6.7 2.5v5.2q0 3.35-1.912 6-1.913 2.65-4.788 3.55Zm0-.75q2.425-.75 4.05-2.962 1.625-2.213 1.9-4.938H12V4.15L6 6.375V11.525q0 .2.05.475H12Z"/>
    </Icon>
  );
});

IconMaterialSecurityW100Filled.displayName = 'AmauiIconMaterialSecurityW100Filled';

export default IconMaterialSecurityW100Filled;
