import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGppMaybeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GppMaybeW100Filled'

      short_name='GppMaybe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 12.55h.7V8h-.7ZM12 15q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363Q12.225 14 12 14q-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Zm0 5.65q-2.875-.9-4.787-3.55-1.913-2.65-1.913-6V5.9L12 3.4l6.7 2.5v5.2q0 3.35-1.912 6-1.913 2.65-4.788 3.55Z"/>
    </Icon>
  );
});

IconMaterialGppMaybeW100Filled.displayName = 'AmauiIconMaterialGppMaybeW100Filled';

export default IconMaterialGppMaybeW100Filled;
