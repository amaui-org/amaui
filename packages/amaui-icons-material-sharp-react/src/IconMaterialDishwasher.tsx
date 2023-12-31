import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDishwasher = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dishwasher'

      short_name='Dishwasher'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-520v320h560v-320H200Zm0-80h560v-160H200v160Zm280 360q-33 0-56.5-23.5T400-320q0-27 15-57.5T480-480q50 72 65 102.5t15 57.5q0 33-23.5 56.5T480-240Zm200-400q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720q-17 0-28.5 11.5T640-680q0 17 11.5 28.5T680-640ZM120-120v-720h720v720H120Zm80-480v-160 160Z"/>
    </Icon>
  );
});

IconMaterialDishwasher.displayName = 'AmauiIconMaterialDishwasher';

export default IconMaterialDishwasher;
