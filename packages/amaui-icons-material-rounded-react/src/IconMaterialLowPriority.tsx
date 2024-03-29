import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLowPriority = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LowPriority'

      short_name='LowPriority'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 7q-.425 0-.712-.287Q14 6.425 14 6t.288-.713Q14.575 5 15 5h6q.425 0 .712.287Q22 5.575 22 6t-.288.713Q21.425 7 21 7Zm0 5.5q-.425 0-.712-.288Q14 11.925 14 11.5t.288-.713q.287-.287.712-.287h6q.425 0 .712.287.288.288.288.713t-.288.712q-.287.288-.712.288Zm0 5.5q-.425 0-.712-.288Q14 17.425 14 17t.288-.712Q14.575 16 15 16h6q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 18 21 18Zm-7.4 2q-.275-.275-.275-.7 0-.425.275-.7l.6-.6q-2.625-.15-4.412-2.025Q2 14.1 2 11.5q0-2.725 1.888-4.613Q5.775 5 8.5 5H11q.425 0 .713.287Q12 5.575 12 6t-.287.713Q11.425 7 11 7H8.5Q6.625 7 5.312 8.3 4 9.6 4 11.475q0 1.775 1.188 3.05Q6.375 15.8 8.15 15.95l-.575-.575Q7.3 15.1 7.3 14.7t.3-.7q.275-.275.7-.275.425 0 .7.275l2.3 2.3q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-2.325 2.325Q8.7 20.3 8.3 20.3t-.7-.3Z"/>
    </Icon>
  );
});

IconMaterialLowPriority.displayName = 'AmauiIconMaterialLowPriority';

export default IconMaterialLowPriority;
