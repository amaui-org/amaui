import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonCheckW100Filled'

      short_name='PersonCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m702-556 160-160q4-4 9.5-4t10.5 4q5 4 4.5 10t-4.5 10L723-538q-9 9-21 9t-21-9l-74-74q-4-4-4.5-9t4.5-10q4-4 10-4t10 4l75 75Zm-342 44q-45 0-76.5-31.5T252-620q0-45 31.5-76.5T360-728q45 0 76.5 31.5T468-620q0 45-31.5 76.5T360-512ZM92-262v-22q0-22 13.5-41.5T142-356q55-26 109.5-39T360-408q54 0 108.5 13T578-356q23 11 36.5 30.5T628-284v22q0 13-8.5 21.5T598-232H122q-13 0-21.5-8.5T92-262Z"/>
    </Icon>
  );
});

IconMaterialPersonCheckW100Filled.displayName = 'AmauiIconMaterialPersonCheckW100Filled';

export default IconMaterialPersonCheckW100Filled;
