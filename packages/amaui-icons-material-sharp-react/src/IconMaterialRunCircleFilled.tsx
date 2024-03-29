import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRunCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RunCircleFilled'

      short_name='RunCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 18v-3.575L11.875 13.2l-.525 2.65-3.75-.775.2-.975 2.775.575.975-4.9-1.55.575V12H9V9.65l3.275-1.2q.375-.125.737.025.363.15.538.5.625 1.275 1.388 1.65Q15.7 11 16 11v1q-.525 0-1.375-.413-.85-.412-1.525-1.337l-.425 2.35L14 14.025V18Zm.5-10q-.425 0-.712-.287Q12.5 7.425 12.5 7t.288-.713Q13.075 6 13.5 6t.713.287q.287.288.287.713t-.287.713Q13.925 8 13.5 8ZM12 22q-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.075.788-3.887.787-1.813 2.15-3.175Q6.3 3.575 8.125 2.787 9.95 2 12 2q2.075 0 3.887.787 1.813.788 3.175 2.151 1.363 1.362 2.15 3.175Q22 9.925 22 12q0 2.05-.788 3.875-.787 1.825-2.15 3.187-1.362 1.363-3.175 2.15Q14.075 22 12 22Zm0-2q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialRunCircleFilled.displayName = 'AmauiIconMaterialRunCircleFilled';

export default IconMaterialRunCircleFilled;
