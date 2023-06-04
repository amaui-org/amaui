import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDangerousW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DangerousW100Filled'

      short_name='Dangerous'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.425 19.7q-.3 0-.575-.113-.275-.112-.5-.337l-3.6-3.6q-.225-.225-.338-.5-.112-.275-.112-.575v-5.15q0-.3.112-.575.113-.275.338-.5l3.6-3.6q.225-.225.5-.338.275-.112.575-.112h5.15q.3 0 .575.112.275.113.5.338l3.6 3.6q.225.225.338.5.112.275.112.575v5.15q0 .3-.112.575-.113.275-.338.5l-3.6 3.6q-.225.225-.5.337-.275.113-.575.113ZM12 12.5l2.625 2.625q.1.1.225.1t.25-.125q.125-.125.125-.25t-.125-.25L12.5 12l2.625-2.625q.1-.1.1-.225T15.1 8.9q-.125-.125-.25-.125t-.25.125L12 11.5 9.375 8.875q-.1-.1-.225-.1T8.9 8.9q-.125.125-.125.25t.125.25l2.6 2.6-2.625 2.625q-.1.1-.1.225t.125.25q.125.125.25.125t.25-.125Z"/>
    </Icon>
  );
});

IconMaterialDangerousW100Filled.displayName = 'AmauiIconMaterialDangerousW100Filled';

export default IconMaterialDangerousW100Filled;
