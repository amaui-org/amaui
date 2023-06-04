import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLaptopChromebookW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopChromebookW100Filled'

      short_name='LaptopChromebook'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.3 17.8v-.7h2V5h17.4v12.1h2v.7Zm8.7-.7h4v-.7h-4Z"/>
    </Icon>
  );
});

IconMaterialLaptopChromebookW100Filled.displayName = 'AmauiIconMaterialLaptopChromebookW100Filled';

export default IconMaterialLaptopChromebookW100Filled;
