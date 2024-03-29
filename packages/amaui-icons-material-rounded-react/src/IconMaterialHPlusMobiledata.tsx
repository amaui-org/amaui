import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHPlusMobiledata = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HPlusMobiledata'

      short_name='HPlusMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 17q-.425 0-.713-.288Q4 16.425 4 16V8q0-.425.287-.713Q4.575 7 5 7t.713.287Q6 7.575 6 8v3h6V8q0-.425.288-.713Q12.575 7 13 7t.713.287Q14 7.575 14 8v8q0 .425-.287.712Q13.425 17 13 17t-.712-.288Q12 16.425 12 16v-3H6v3q0 .425-.287.712Q5.425 17 5 17Zm14-2q-.425 0-.712-.288Q18 14.425 18 14v-1h-1q-.425 0-.712-.288Q16 12.425 16 12t.288-.713Q16.575 11 17 11h1v-1q0-.425.288-.713Q18.575 9 19 9t.712.287Q20 9.575 20 10v1h1q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 13 21 13h-1v1q0 .425-.288.712Q19.425 15 19 15Z"/>
    </Icon>
  );
});

IconMaterialHPlusMobiledata.displayName = 'AmauiIconMaterialHPlusMobiledata';

export default IconMaterialHPlusMobiledata;
