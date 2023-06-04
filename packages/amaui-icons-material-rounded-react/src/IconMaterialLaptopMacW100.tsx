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
      <path d="M2.35 19.05q-.425 0-.737-.312Q1.3 18.425 1.3 18h3.5q-.65 0-1.075-.425Q3.3 17.15 3.3 16.5V5.8q0-.65.425-1.075Q4.15 4.3 4.8 4.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.7q0 .65-.425 1.075Q19.85 18 19.2 18h3.5q0 .425-.312.738-.313.312-.738.312ZM19.2 17.3q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q19.5 5 19.2 5H4.8q-.3 0-.55.25Q4 5.5 4 5.8v10.7q0 .3.25.55.25.25.55.25ZM12 18.7q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15Zm-8-1.4V5 17.3Z"/>
    </Icon>
  );
});

IconMaterialLaptopMacW100.displayName = 'AmauiIconMaterialLaptopMacW100';

export default IconMaterialLaptopMacW100;
