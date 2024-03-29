import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallSplit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallSplit'

      short_name='CallSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.85 10.6 13.4 9.15 16.6 6H15q-.425 0-.712-.287Q14 5.425 14 5t.288-.713Q14.575 4 15 4h4q.425 0 .712.287Q20 4.575 20 5v4q0 .425-.288.712Q19.425 10 19 10t-.712-.288Q18 9.425 18 9V7.4ZM12 20q-.425 0-.712-.288Q11 19.425 11 19v-6.6l-5-5V9q0 .425-.287.712Q5.425 10 5 10t-.713-.288Q4 9.425 4 9V5q0-.425.287-.713Q4.575 4 5 4h4q.425 0 .713.287Q10 4.575 10 5t-.287.713Q9.425 6 9 6H7.4l5.6 5.6V19q0 .425-.287.712Q12.425 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialCallSplit.displayName = 'AmauiIconMaterialCallSplit';

export default IconMaterialCallSplit;
