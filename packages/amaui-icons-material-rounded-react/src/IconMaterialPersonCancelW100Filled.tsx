import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonCancelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonCancelW100Filled'

      short_name='PersonCancel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m780-559-74 73q-4 4-9.5 4.5T686-486q-5-5-5-10t5-10l74-74-74-73q-5-4-5-9.5t5-10.5q5-5 10-5t10 5l74 74 73-74q4-5 9.5-5t10.5 5q5 5 5 10t-5 10l-73 73 73 74q4 4 4.5 9.5T873-486q-5 5-10 5t-10-5l-73-73Zm-420 47q-45 0-76.5-31.5T252-620q0-45 31.5-76.5T360-728q45 0 76.5 31.5T468-620q0 45-31.5 76.5T360-512ZM92-262v-22q0-22 13.5-41.5T142-356q55-26 109.5-39T360-408q54 0 108.5 13T578-356q23 11 36.5 30.5T628-284v22q0 13-8.5 21.5T598-232H122q-13 0-21.5-8.5T92-262Z"/>
    </Icon>
  );
});

IconMaterialPersonCancelW100Filled.displayName = 'AmauiIconMaterialPersonCancelW100Filled';

export default IconMaterialPersonCancelW100Filled;
