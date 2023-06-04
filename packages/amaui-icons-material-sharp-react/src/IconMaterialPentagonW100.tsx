import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPentagonW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PentagonW100'

      short_name='Pentagon'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.975 19.65h10.05L20.4 9.525 12 3.65 3.6 9.525Zm-.5.7-3.7-11.1L12 2.8l9.225 6.45-3.7 11.1ZM12 11.65Z"/>
    </Icon>
  );
});

IconMaterialPentagonW100.displayName = 'AmauiIconMaterialPentagonW100';

export default IconMaterialPentagonW100;
