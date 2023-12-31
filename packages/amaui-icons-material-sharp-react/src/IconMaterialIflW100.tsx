import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIflW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IflW100'

      short_name='Ifl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M632.118-278Q653-278 667.5-292.618q14.5-14.617 14.5-35.5Q682-349 667.382-363.5q-14.617-14.5-35.5-14.5Q611-378 596.5-363.382q-14.5 14.617-14.5 35.5Q582-307 596.618-292.5q14.617 14.5 35.5 14.5Zm-152-152Q501-430 515.5-444.618q14.5-14.617 14.5-35.5Q530-501 515.382-515.5q-14.617-14.5-35.5-14.5Q459-530 444.5-515.382q-14.5 14.617-14.5 35.5Q430-459 444.618-444.5q14.617 14.5 35.5 14.5Zm-152-152Q349-582 363.5-596.618q14.5-14.617 14.5-35.5Q378-653 363.382-667.5q-14.617-14.5-35.5-14.5Q307-682 292.5-667.382q-14.5 14.617-14.5 35.5Q278-611 292.618-596.5q14.617 14.5 35.5 14.5ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialIflW100.displayName = 'AmauiIconMaterialIflW100';

export default IconMaterialIflW100;
