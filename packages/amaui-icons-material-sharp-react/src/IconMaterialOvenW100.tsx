import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOvenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OvenW100'

      short_name='Oven'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-660q17 0 28.5-11.5T680-700q0-17-11.5-28.5T640-740q-17 0-28.5 11.5T600-700q0 17 11.5 28.5T640-660Zm-160 0q17 0 28.5-11.5T520-700q0-17-11.5-28.5T480-740q-17 0-28.5 11.5T440-700q0 17 11.5 28.5T480-660Zm-160 0q17 0 28.5-11.5T360-700q0-17-11.5-28.5T320-740q-17 0-28.5 11.5T280-700q0 17 11.5 28.5T320-660Zm-120 80v380h560v-380H200Zm220 140h120v-40H420v40ZM172-172v-616h616v616H172Zm308-408Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialOvenW100.displayName = 'AmauiIconMaterialOvenW100';

export default IconMaterialOvenW100;
