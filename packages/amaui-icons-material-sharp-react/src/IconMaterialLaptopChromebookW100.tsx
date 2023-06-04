import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLaptopChromebookW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopChromebookW100'

      short_name='LaptopChromebook'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.3 17.8v-.7h2V5h17.4v12.1h2v.7Zm8.7-.7h4v-.7h-4Zm-6-1.4h16v-10H4Zm0 0v-10 10Z"/>
    </Icon>
  );
});

IconMaterialLaptopChromebookW100.displayName = 'AmauiIconMaterialLaptopChromebookW100';

export default IconMaterialLaptopChromebookW100;
