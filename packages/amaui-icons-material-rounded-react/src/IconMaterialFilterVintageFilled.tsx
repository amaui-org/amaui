import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterVintageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterVintageFilled'

      short_name='FilterVintage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.05 22q-1.425 0-2.525-.9-1.1-.9-1.375-2.3-1.325.425-2.675-.05-1.35-.475-2.075-1.65-.75-1.2-.55-2.662.2-1.463 1.3-2.438-1.05-.95-1.262-2.35-.213-1.4.462-2.6.675-1.2 2.038-1.738Q6.75 4.775 8.1 5.2q.275-1.4 1.375-2.3Q10.575 2 12 2q1.425 0 2.525.9 1.1.9 1.375 2.3 1.4-.425 2.713.075 1.312.5 2.037 1.775.675 1.25.488 2.612Q20.95 11.025 19.85 12q1.1.975 1.313 2.412.212 1.438-.463 2.688-.725 1.275-2.037 1.7-1.313.425-2.713 0-.275 1.4-1.375 2.3-1.1.9-2.525.9ZM12 16q1.65 0 2.825-1.175Q16 13.65 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 1.65 1.175 2.825Q10.35 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialFilterVintageFilled.displayName = 'AmauiIconMaterialFilterVintageFilled';

export default IconMaterialFilterVintageFilled;
