import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnergySavingsLeafFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnergySavingsLeafFilled'

      short_name='EnergySavingsLeaf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-1.6 0-3.025-.525-1.425-.525-2.575-1.45L5.125 20.3q-.3.3-.7.287-.4-.012-.7-.312-.3-.3-.3-.713 0-.412.3-.712l1.25-1.25q-.925-1.15-1.45-2.588Q3 13.575 3 12q0-3.75 2.638-6.375Q8.275 3 12 3h7q.825 0 1.413.587Q21 4.175 21 5v7q0 3.725-2.625 6.363Q15.75 21 12 21Zm-1.325-4.125 5.175-4.625q.25-.225.15-.538-.1-.312-.45-.362l-4.05-.4 2.425-3.325q.1-.125.087-.263Q14 7.225 13.9 7.1q-.125-.125-.287-.125-.163 0-.288.125l-5.15 4.625q-.25.225-.15.537.1.313.45.363l4.05.4-2.45 3.325q-.075.125-.075.263 0 .137.125.262T10.4 17q.15 0 .275-.125Z"/>
    </Icon>
  );
});

IconMaterialEnergySavingsLeafFilled.displayName = 'AmauiIconMaterialEnergySavingsLeafFilled';

export default IconMaterialEnergySavingsLeafFilled;
