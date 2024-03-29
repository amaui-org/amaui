import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJoinRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinRightFilled'

      short_name='JoinRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 19q-.55 0-1.087-.087-.538-.088-1.088-.288Q15.1 17.6 15.8 15.875q.7-1.725.7-3.875t-.7-3.875q-.7-1.725-1.975-2.75.55-.2 1.088-.287Q15.45 5 16 5q2.925 0 4.962 2.037Q23 9.075 23 12q0 2.925-2.038 4.962Q18.925 19 16 19Zm-4-1.25q-1.25 0-2.125-1.675T9 12q0-2.4.875-4.075Q10.75 6.25 12 6.25t2.125 1.675Q15 9.6 15 12q0 2.4-.875 4.075Q13.25 17.75 12 17.75ZM8 19q-2.9 0-4.95-2.05Q1 14.9 1 12q0-2.9 2.05-4.95Q5.1 5 8 5q.575 0 1.125.088.55.087 1.075.262-.425.3-.813.775Q9 6.6 8.725 7.05q-.175-.025-.35-.038Q8.2 7 8 7 5.925 7 4.463 8.462 3 9.925 3 12q0 2.075 1.463 3.537Q5.925 17 8 17q.2 0 .375-.012.175-.013.35-.038.275.45.662.925.388.475.813.775-.525.175-1.075.263Q8.575 19 8 19Z"/>
    </Icon>
  );
});

IconMaterialJoinRightFilled.displayName = 'AmauiIconMaterialJoinRightFilled';

export default IconMaterialJoinRightFilled;
