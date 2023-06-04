import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLaptopMacW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopMacW100Filled'

      short_name='LaptopMac'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.3 19.05V18H4l-.7-.7v-13h17.4v13l-.7.7h2.7v1.05ZM12 18.7q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Z"/>
    </Icon>
  );
});

IconMaterialLaptopMacW100Filled.displayName = 'AmauiIconMaterialLaptopMacW100Filled';

export default IconMaterialLaptopMacW100Filled;
