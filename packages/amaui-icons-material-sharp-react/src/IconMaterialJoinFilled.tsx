import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJoinFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinFilled'

      short_name='Join'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 19q2.925 0 4.962-2.038Q23 14.925 23 12t-2.038-4.963Q18.925 5 16 5q-.7 0-1.362.137-.663.138-1.288.388 1.475 1.35 2.313 3.012Q16.5 10.2 16.5 12t-.837 3.462q-.838 1.663-2.313 3.013.625.25 1.288.388Q15.3 19 16 19Zm-4-1.25q1.375-.95 2.188-2.45Q15 13.8 15 12q0-1.8-.812-3.3Q13.375 7.2 12 6.25q-1.375.95-2.188 2.45Q9 10.2 9 12q0 1.8.812 3.3.813 1.5 2.188 2.45ZM8 19q.675 0 1.312-.125.638-.125 1.238-.35-1.425-1.175-2.238-2.862Q7.5 13.975 7.5 12q0-1.8.838-3.463.837-1.662 2.312-3.012-.625-.25-1.287-.388Q8.7 5 8 5 5.075 5 3.038 7.037 1 9.075 1 12q0 2.925 2.038 4.962Q5.075 19 8 19Z"/>
    </Icon>
  );
});

IconMaterialJoinFilled.displayName = 'AmauiIconMaterialJoinFilled';

export default IconMaterialJoinFilled;
