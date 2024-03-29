import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJoinLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinLeft'

      short_name='JoinLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 19q-2.925 0-4.962-2.038Q1 14.925 1 12t2.038-4.963Q5.075 5 8 5q.55 0 1.088.088.537.087 1.087.287Q8.9 6.4 8.2 8.125 7.5 9.85 7.5 12t.7 3.875q.7 1.725 1.975 2.75-.55.2-1.087.288Q8.55 19 8 19Zm4-1.25q-1.25 0-2.125-1.675T9 12q0-2.4.875-4.075Q10.75 6.25 12 6.25t2.125 1.675Q15 9.6 15 12q0 2.4-.875 4.075Q13.25 17.75 12 17.75ZM16 19q-.575 0-1.125-.087-.55-.088-1.075-.263.425-.3.825-.775.4-.475.675-.925.175.025.338.038Q15.8 17 16 17q2.075 0 3.538-1.463Q21 14.075 21 12t-1.462-3.538Q18.075 7 16 7q-.2 0-.362.012-.163.013-.338.038-.275-.45-.675-.925-.4-.475-.825-.775.525-.175 1.075-.262Q15.425 5 16 5q2.9 0 4.95 2.05Q23 9.1 23 12q0 2.9-2.05 4.95Q18.9 19 16 19Z"/>
    </Icon>
  );
});

IconMaterialJoinLeft.displayName = 'AmauiIconMaterialJoinLeft';

export default IconMaterialJoinLeft;
