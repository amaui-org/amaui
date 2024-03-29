import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsGolf = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsGolf'

      short_name='SportsGolf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q-2.925 0-4.962-2.038Q5 11.925 5 9t2.038-4.963Q9.075 2 12 2t4.962 2.037Q19 6.075 19 9q0 2.925-2.038 4.962Q14.925 16 12 16Zm0-2q2.075 0 3.538-1.463Q17 11.075 17 9t-1.462-3.537Q14.075 4 12 4 9.925 4 8.463 5.463 7 6.925 7 9t1.463 3.537Q9.925 14 12 14Zm-2-5q.425 0 .713-.288Q11 8.425 11 8t-.287-.713Q10.425 7 10 7t-.712.287Q9 7.575 9 8t.288.712Q9.575 9 10 9Zm4 0q.425 0 .713-.288Q15 8.425 15 8t-.287-.713Q14.425 7 14 7t-.712.287Q13 7.575 13 8t.288.712Q13.575 9 14 9Zm-2-2q.425 0 .713-.287Q13 6.425 13 6t-.287-.713Q12.425 5 12 5t-.712.287Q11 5.575 11 6t.288.713Q11.575 7 12 7Zm-1 15v-1q0-.825-.587-1.413Q9.825 19 9 19H8q-.425 0-.713-.288Q7 18.425 7 18t.287-.712Q7.575 17 8 17h8q.425 0 .712.288.288.287.288.712t-.288.712Q16.425 19 16 19h-1q-.825 0-1.412.587Q13 20.175 13 21v1Zm1-13Z"/>
    </Icon>
  );
});

IconMaterialSportsGolf.displayName = 'AmauiIconMaterialSportsGolf';

export default IconMaterialSportsGolf;
