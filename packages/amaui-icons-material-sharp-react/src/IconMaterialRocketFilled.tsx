import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRocketFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RocketFilled'

      short_name='Rocket'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22v-5.925q0-.5.238-.95.237-.45.662-.725l1.1-.725q.175 2.1.55 3.575.375 1.475 1.175 3.275Zm5.225-2q-.875-1.65-1.3-3.5-.425-1.85-.425-3.825 0-3.125 1.238-5.888Q9.975 4.025 12 2.6q2.025 1.425 3.262 4.187Q16.5 9.55 16.5 12.675q0 1.95-.425 3.787-.425 1.838-1.3 3.538ZM12 13q.825 0 1.413-.588Q14 11.825 14 11t-.587-1.413Q12.825 9 12 9q-.825 0-1.412.587Q10 10.175 10 11q0 .825.588 1.412Q11.175 13 12 13Zm8 9-3.725-1.475q.8-1.8 1.175-3.275.375-1.475.55-3.575l1.1.725q.425.275.663.725.237.45.237.95Z"/>
    </Icon>
  );
});

IconMaterialRocketFilled.displayName = 'AmauiIconMaterialRocketFilled';

export default IconMaterialRocketFilled;
