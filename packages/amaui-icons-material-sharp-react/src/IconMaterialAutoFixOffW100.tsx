import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoFixOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoFixOffW100'

      short_name='AutoFixOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.275 6.55-.65-1.4-1.4-.65 1.4-.65.65-1.4.65 1.4 1.4.65-1.4.65Zm-4.9 5.275-2.4-2.4 2-1.975 2.4 2.4Zm5.1 8.925-7-7-6.9 6.85-2.4-2.4 6.9-6.875-7-6.975.5-.5 16.4 16.4Zm-13.9-1.15 6.375-6.375-1.4-1.4L4.175 18.2Zm0 0-1.4-1.4 1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialAutoFixOffW100.displayName = 'AmauiIconMaterialAutoFixOffW100';

export default IconMaterialAutoFixOffW100;
