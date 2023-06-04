import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLaptopChromebookFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopChromebookFilled'

      short_name='LaptopChromebook'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 20v-2h2V3h20v15h2v2Zm10-2h4v-1h-4Z"/>
    </Icon>
  );
});

IconMaterialLaptopChromebookFilled.displayName = 'AmauiIconMaterialLaptopChromebookFilled';

export default IconMaterialLaptopChromebookFilled;
