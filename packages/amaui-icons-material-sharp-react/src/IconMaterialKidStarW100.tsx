import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKidStarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KidStarW100'

      short_name='KidStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m331-668 149-200 149 200 237 80-153 204 6 233-239-71-239 71 6-234L95-588l236-80Zm18 24-207 71 134 180-6 203 210-61 210 63-6-205 134-178-207-73-131-176-131 176Zm131 140Z"/>
    </Icon>
  );
});

IconMaterialKidStarW100.displayName = 'AmauiIconMaterialKidStarW100';

export default IconMaterialKidStarW100;
