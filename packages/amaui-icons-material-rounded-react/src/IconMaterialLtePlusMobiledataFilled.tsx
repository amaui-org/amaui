import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLtePlusMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LtePlusMobiledataFilled'

      short_name='LtePlusMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 16q-.425 0-.712-.288Q1 15.425 1 15V9q0-.425.288-.713Q1.575 8 2 8t.713.287Q3 8.575 3 9v5h2q.425 0 .713.287Q6 14.575 6 15t-.287.712Q5.425 16 5 16Zm6 0q-.425 0-.713-.288Q7 15.425 7 15v-5H6q-.425 0-.713-.288Q5 9.425 5 9t.287-.713Q5.575 8 6 8h4q.425 0 .713.287Q11 8.575 11 9t-.287.712Q10.425 10 10 10H9v5q0 .425-.287.712Q8.425 16 8 16Zm5 0q-.425 0-.712-.288Q12 15.425 12 15V9q0-.425.288-.713Q12.575 8 13 8h3q.425 0 .712.287Q17 8.575 17 9t-.288.712Q16.425 10 16 10h-2v1h2q.425 0 .712.287.288.288.288.713t-.288.712Q16.425 13 16 13h-2v1h2q.425 0 .712.287.288.288.288.713t-.288.712Q16.425 16 16 16Zm8-1q-.425 0-.712-.288Q20 14.425 20 14v-1h-1q-.425 0-.712-.288Q18 12.425 18 12t.288-.713Q18.575 11 19 11h1v-1q0-.425.288-.713Q20.575 9 21 9t.712.287Q22 9.575 22 10v1h1q.425 0 .712.287.288.288.288.713t-.288.712Q23.425 13 23 13h-1v1q0 .425-.288.712Q21.425 15 21 15Z"/>
    </Icon>
  );
});

IconMaterialLtePlusMobiledataFilled.displayName = 'AmauiIconMaterialLtePlusMobiledataFilled';

export default IconMaterialLtePlusMobiledataFilled;
