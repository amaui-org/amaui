import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLaptopChromebook = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopChromebook'

      short_name='LaptopChromebook'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 20v-2h2V3h20v15h2v2Zm10-2h4v-1h-4Zm-6-3h16V5H4Zm0 0V5v10Z"/>
    </Icon>
  );
});

IconMaterialLaptopChromebook.displayName = 'AmauiIconMaterialLaptopChromebook';

export default IconMaterialLaptopChromebook;
