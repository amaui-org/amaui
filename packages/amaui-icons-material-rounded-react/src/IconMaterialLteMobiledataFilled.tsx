import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLteMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LteMobiledataFilled'

      short_name='LteMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 16q-.425 0-.713-.288Q4 15.425 4 15V9q0-.425.287-.713Q4.575 8 5 8t.713.287Q6 8.575 6 9v5h2q.425 0 .713.287Q9 14.575 9 15t-.287.712Q8.425 16 8 16Zm7 0q-.425 0-.712-.288Q11 15.425 11 15v-5h-1q-.425 0-.712-.288Q9 9.425 9 9t.288-.713Q9.575 8 10 8h4q.425 0 .713.287Q15 8.575 15 9t-.287.712Q14.425 10 14 10h-1v5q0 .425-.287.712Q12.425 16 12 16Zm5 0q-.425 0-.712-.288Q16 15.425 16 15V9q0-.425.288-.713Q16.575 8 17 8h3q.425 0 .712.287Q21 8.575 21 9t-.288.712Q20.425 10 20 10h-2v1h2q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13h-2v1h2q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 16 20 16Z"/>
    </Icon>
  );
});

IconMaterialLteMobiledataFilled.displayName = 'AmauiIconMaterialLteMobiledataFilled';

export default IconMaterialLteMobiledataFilled;
