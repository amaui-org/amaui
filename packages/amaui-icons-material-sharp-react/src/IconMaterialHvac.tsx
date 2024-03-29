import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHvac = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hvac'

      short_name='Hvac'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm2-2h14V5H5Zm7-1q2.5 0 4.25-1.75T18 12q0-2.5-1.75-4.25T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18Zm-3.95-6.5q.05-.425.175-.788.125-.362.325-.712h6.9q.2.35.325.712.125.363.175.788Zm.5 2.5q-.2-.35-.325-.713-.125-.362-.175-.787h7.9q-.05.425-.175.787-.125.363-.325.713ZM12 16q-.75 0-1.425-.275T9.375 15h5.25q-.525.45-1.2.725Q12.75 16 12 16ZM9.375 9q.525-.45 1.2-.725Q11.25 8 12 8t1.425.275q.675.275 1.2.725ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialHvac.displayName = 'AmauiIconMaterialHvac';

export default IconMaterialHvac;
