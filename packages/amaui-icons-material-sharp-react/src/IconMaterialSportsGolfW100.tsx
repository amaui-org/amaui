import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsGolfW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsGolfW100'

      short_name='SportsGolf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.7q-2.375 0-4.037-1.663Q6.3 11.375 6.3 9t1.663-4.038Q9.625 3.3 12 3.3t4.038 1.662Q17.7 6.625 17.7 9t-1.662 4.037Q14.375 14.7 12 14.7Zm0-.7q2.075 0 3.538-1.463Q17 11.075 17 9t-1.462-3.537Q14.075 4 12 4 9.925 4 8.463 5.463 7 6.925 7 9t1.463 3.537Q9.925 14 12 14Zm-2-5q.425 0 .713-.288Q11 8.425 11 8t-.287-.713Q10.425 7 10 7t-.712.287Q9 7.575 9 8t.288.712Q9.575 9 10 9Zm4 0q.425 0 .713-.288Q15 8.425 15 8t-.287-.713Q14.425 7 14 7t-.712.287Q13 7.575 13 8t.288.712Q13.575 9 14 9Zm-2-2q.425 0 .713-.287Q13 6.425 13 6t-.287-.713Q12.425 5 12 5t-.712.287Q11 5.575 11 6t.288.713Q11.575 7 12 7Zm-.35 13.55v-1q0-1.125-.763-1.887Q10.125 16.9 9 16.9H8v-.7h8v.7h-1q-1.125 0-1.887.763-.763.762-.763 1.887v1ZM12 9Z"/>
    </Icon>
  );
});

IconMaterialSportsGolfW100.displayName = 'AmauiIconMaterialSportsGolfW100';

export default IconMaterialSportsGolfW100;
