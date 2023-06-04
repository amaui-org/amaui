import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkW100Filled'

      short_name='Work'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 19.7q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V8.8q0-.65.425-1.075Q4.15 7.3 4.8 7.3h4.5V6.1q0-.65.425-1.075Q10.15 4.6 10.8 4.6h2.4q.65 0 1.075.425.425.425.425 1.075v1.2h4.5q.65 0 1.075.425.425.425.425 1.075v9.4q0 .65-.425 1.075-.425.425-1.075.425ZM10 7.3h4V6.1q0-.3-.25-.55-.25-.25-.55-.25h-2.4q-.3 0-.55.25-.25.25-.25.55Z"/>
    </Icon>
  );
});

IconMaterialWorkW100Filled.displayName = 'AmauiIconMaterialWorkW100Filled';

export default IconMaterialWorkW100Filled;
