import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddBusinessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBusinessFilled'

      short_name='AddBusiness'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 20v2q0 .425-.288.712Q19.425 23 19 23t-.712-.288Q18 22.425 18 22v-2h-2q-.425 0-.712-.288Q15 19.425 15 19t.288-.712Q15.575 18 16 18h2v-2q0-.425.288-.713Q18.575 15 19 15t.712.287Q20 15.575 20 16v2h2q.425 0 .712.288.288.287.288.712t-.288.712Q22.425 20 22 20ZM3 20q-.425 0-.712-.288Q2 19.425 2 19v-5h-.175q-.475 0-.775-.363-.3-.362-.2-.837l1-5q.075-.35.35-.575Q2.475 7 2.825 7h13.35q.35 0 .625.225t.35.575l1 5q.1.475-.2.837-.3.363-.775.363H17v2q0 .425-.288.712Q16.425 17 16 17t-.712-.288Q15 16.425 15 16v-2h-4v5q0 .425-.287.712Q10.425 20 10 20Zm1-2h5v-4H4ZM3 6q-.425 0-.712-.287Q2 5.425 2 5t.288-.713Q2.575 4 3 4h13q.425 0 .712.287Q17 4.575 17 5t-.288.713Q16.425 6 16 6Z"/>
    </Icon>
  );
});

IconMaterialAddBusinessFilled.displayName = 'AmauiIconMaterialAddBusinessFilled';

export default IconMaterialAddBusinessFilled;
