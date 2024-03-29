import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsGolfFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsGolfFilled'

      short_name='SportsGolf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q-2.925 0-4.962-2.038Q5 11.925 5 9t2.038-4.963Q9.075 2 12 2t4.962 2.037Q19 6.075 19 9q0 2.925-2.038 4.962Q14.925 16 12 16Zm-2-7q.425 0 .713-.288Q11 8.425 11 8t-.287-.713Q10.425 7 10 7t-.712.287Q9 7.575 9 8t.288.712Q9.575 9 10 9Zm4 0q.425 0 .713-.288Q15 8.425 15 8t-.287-.713Q14.425 7 14 7t-.712.287Q13 7.575 13 8t.288.712Q13.575 9 14 9Zm-2-2q.425 0 .713-.287Q13 6.425 13 6t-.287-.713Q12.425 5 12 5t-.712.287Q11 5.575 11 6t.288.713Q11.575 7 12 7Zm-1 15v-1q0-.825-.587-1.413Q9.825 19 9 19H7v-2h10v2h-2q-.825 0-1.412.587Q13 20.175 13 21v1Z"/>
    </Icon>
  );
});

IconMaterialSportsGolfFilled.displayName = 'AmauiIconMaterialSportsGolfFilled';

export default IconMaterialSportsGolfFilled;
