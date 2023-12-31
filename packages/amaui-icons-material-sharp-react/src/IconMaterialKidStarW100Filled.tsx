import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKidStarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KidStarW100Filled'

      short_name='KidStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m331-668 149-200 149 200 237 80-153 204 6 233-239-71-239 71 6-234L95-588l236-80Z"/>
    </Icon>
  );
});

IconMaterialKidStarW100Filled.displayName = 'AmauiIconMaterialKidStarW100Filled';

export default IconMaterialKidStarW100Filled;
