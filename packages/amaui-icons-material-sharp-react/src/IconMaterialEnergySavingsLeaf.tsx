import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnergySavingsLeaf = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnergySavingsLeaf'

      short_name='EnergySavingsLeaf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-1.6 0-3.025-.525-1.425-.525-2.575-1.45L4.425 21 3 19.575 4.975 17.6q-.925-1.15-1.45-2.588Q3 13.575 3 12q0-3.75 2.638-6.375Q8.275 3 12 3h9v9q0 3.725-2.625 6.363Q15.75 21 12 21Zm0-2q2.925 0 4.962-2.05Q19 14.9 19 12V5h-7Q9.1 5 7.05 7.037 5 9.075 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Zm-1.325-2.125 5.175-4.625q.25-.225.15-.538-.1-.312-.45-.362l-4.05-.4 2.425-3.325q.1-.125.087-.263Q14 7.225 13.9 7.1q-.125-.125-.287-.125-.163 0-.288.125l-5.15 4.625q-.25.225-.15.537.1.313.45.363l4.05.4-2.45 3.325q-.075.125-.075.263 0 .137.125.262T10.4 17q.15 0 .275-.125ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialEnergySavingsLeaf.displayName = 'AmauiIconMaterialEnergySavingsLeaf';

export default IconMaterialEnergySavingsLeaf;
