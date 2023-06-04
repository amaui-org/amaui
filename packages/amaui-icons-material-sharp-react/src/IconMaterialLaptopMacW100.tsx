import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLaptopMacW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopMacW100'

      short_name='LaptopMac'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.3 19.05V18H4l-.7-.7v-13h17.4v13l-.7.7h2.7v1.05ZM4 17.3h16V5H4Zm8 1.4q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Zm-8-1.4V5v12.3Z"/>
    </Icon>
  );
});

IconMaterialLaptopMacW100.displayName = 'AmauiIconMaterialLaptopMacW100';

export default IconMaterialLaptopMacW100;
