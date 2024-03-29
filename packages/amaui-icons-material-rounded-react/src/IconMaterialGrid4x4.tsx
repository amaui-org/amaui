import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGrid4x4 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid4x4'

      short_name='Grid4x4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.425 0-.713-.288Q5 21.425 5 21v-2H3q-.425 0-.712-.288Q2 18.425 2 18t.288-.712Q2.575 17 3 17h2v-4H3q-.425 0-.712-.288Q2 12.425 2 12t.288-.713Q2.575 11 3 11h2V7H3q-.425 0-.712-.287Q2 6.425 2 6t.288-.713Q2.575 5 3 5h2V3q0-.425.287-.713Q5.575 2 6 2t.713.287Q7 2.575 7 3v2h4V3q0-.425.288-.713Q11.575 2 12 2t.713.287Q13 2.575 13 3v2h4V3q0-.425.288-.713Q17.575 2 18 2t.712.287Q19 2.575 19 3v2h2q.425 0 .712.287Q22 5.575 22 6t-.288.713Q21.425 7 21 7h-2v4h2q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 13 21 13h-2v4h2q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 19 21 19h-2v2q0 .425-.288.712Q18.425 22 18 22t-.712-.288Q17 21.425 17 21v-2h-4v2q0 .425-.287.712Q12.425 22 12 22t-.712-.288Q11 21.425 11 21v-2H7v2q0 .425-.287.712Q6.425 22 6 22Zm1-11h4V7H7Zm0 6h4v-4H7Zm6 0h4v-4h-4Zm0-6h4V7h-4Z"/>
    </Icon>
  );
});

IconMaterialGrid4x4.displayName = 'AmauiIconMaterialGrid4x4';

export default IconMaterialGrid4x4;
