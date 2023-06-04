import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestSunblockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestSunblockW100'

      short_name='NestSunblock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 7.05v-2.4h.7v2.4Zm0 12.3v-2.4h.7v2.4Zm4.1-10.6-.5-.5 1.7-1.7.5.5Zm1.2 8.7-1.7-1.7.5-.5 1.7 1.7Zm.075-5.1v-.7H15.3l-2.2-2.925.575-.425 3.025 4.05Zm11 6V5.65h1.7v12.7Zm-16.3-3v-.7q1.1 0 1.875-.775.775-.775.775-1.875T4.6 10.125q-.775-.775-1.875-.775v-.7q1.4 0 2.375.975.975.975.975 2.375T5.1 14.375q-.975.975-2.375.975Z"/>
    </Icon>
  );
});

IconMaterialNestSunblockW100.displayName = 'AmauiIconMaterialNestSunblockW100';

export default IconMaterialNestSunblockW100;
