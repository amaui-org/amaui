import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAvTimer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvTimer'

      short_name='AvTimer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18q-.425 0-.712-.288Q11 17.425 11 17t.288-.712Q11.575 16 12 16t.713.288Q13 16.575 13 17t-.287.712Q12.425 18 12 18Zm0 3q-1.85 0-3.488-.712-1.637-.713-2.862-1.938t-1.938-2.862Q3 13.85 3 12q0-2.225.975-4.088Q4.95 6.05 6.6 4.8l6.8 6.8L12 13 6.6 7.6q-.75.9-1.175 2.013Q5 10.725 5 12q0 2.9 2.05 4.95Q9.1 19 12 19q2.9 0 4.95-2.05Q19 14.9 19 12q0-2.675-1.712-4.613Q15.575 5.45 13 5.1V7h-2V3h1q1.85 0 3.488.712 1.637.713 2.862 1.938t1.938 2.862Q21 10.15 21 12t-.712 3.488q-.713 1.637-1.938 2.862t-2.862 1.938Q13.85 21 12 21Zm5-8q-.425 0-.712-.288Q16 12.425 16 12t.288-.713Q16.575 11 17 11t.712.287Q18 11.575 18 12t-.288.712Q17.425 13 17 13ZM7 13q-.425 0-.713-.288Q6 12.425 6 12t.287-.713Q6.575 11 7 11t.713.287Q8 11.575 8 12t-.287.712Q7.425 13 7 13Z"/>
    </Icon>
  );
});

IconMaterialAvTimer.displayName = 'AmauiIconMaterialAvTimer';

export default IconMaterialAvTimer;
