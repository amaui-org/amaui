import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSupportAgent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupportAgent'

      short_name='SupportAgent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 21v-2h8v-7.1q0-1.45-.55-2.725-.55-1.275-1.5-2.225Q16 6 14.725 5.45 13.45 4.9 12 4.9q-1.45 0-2.725.55Q8 6 7.05 6.95q-.95.95-1.5 2.225Q5 10.45 5 11.9v5.875H2v-5.55h1l.075-1.275q.225-1.825 1.038-3.3.812-1.475 2.025-2.5Q7.35 4.125 8.863 3.562 10.375 3 12 3q1.65 0 3.163.562 1.512.563 2.712 1.6 1.2 1.038 2.013 2.5.812 1.463 1.037 3.263l.075 1.3h1v5.55h-1V21Zm-2-7q-.425 0-.712-.288Q8 13.425 8 13t.288-.713Q8.575 12 9 12t.713.287Q10 12.575 10 13t-.287.712Q9.425 14 9 14Zm6 0q-.425 0-.712-.288Q14 13.425 14 13t.288-.713Q14.575 12 15 12t.713.287Q16 12.575 16 13t-.287.712Q15.425 14 15 14Zm-8.975-1.55q-.1-1.475.413-2.675.512-1.2 1.374-2.038Q8.675 6.9 9.8 6.45 10.925 6 12.05 6q2.275 0 3.938 1.438Q17.65 8.875 18 11.025 15.65 11 13.75 9.762q-1.9-1.237-2.875-3.212-.4 2.025-1.687 3.587Q7.9 11.7 6.025 12.45Z"/>
    </Icon>
  );
});

IconMaterialSupportAgent.displayName = 'AmauiIconMaterialSupportAgent';

export default IconMaterialSupportAgent;
