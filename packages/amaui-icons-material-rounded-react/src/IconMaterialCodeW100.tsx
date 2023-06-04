import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCodeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeW100'

      short_name='Code'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.225 16.875q-.1.1-.237.087-.138-.012-.238-.112-.125-.125-.125-.25t.125-.25L20.1 12l-4.375-4.375q-.1-.1-.088-.238.013-.137.113-.237.125-.125.25-.125t.25.125l4.325 4.325q.225.225.225.525 0 .3-.225.525ZM7.75 16.85l-4.325-4.325Q3.2 12.3 3.2 12q0-.3.225-.525l4.35-4.35q.1-.1.237-.088.138.013.238.113.125.125.125.25t-.125.25L3.9 12l4.375 4.375q.1.1.088.238-.013.137-.113.237-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialCodeW100.displayName = 'AmauiIconMaterialCodeW100';

export default IconMaterialCodeW100;
