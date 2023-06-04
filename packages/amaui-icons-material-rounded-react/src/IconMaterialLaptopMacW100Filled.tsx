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
      <path d="M2.35 19.05q-.425 0-.737-.312Q1.3 18.425 1.3 18h3.5q-.65 0-1.075-.425Q3.3 17.15 3.3 16.5V5.8q0-.65.425-1.075Q4.15 4.3 4.8 4.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.7q0 .65-.425 1.075Q19.85 18 19.2 18h3.5q0 .425-.312.738-.313.312-.738.312ZM12 18.7q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Z"/>
    </Icon>
  );
});

IconMaterialLaptopMacW100Filled.displayName = 'AmauiIconMaterialLaptopMacW100Filled';

export default IconMaterialLaptopMacW100Filled;
