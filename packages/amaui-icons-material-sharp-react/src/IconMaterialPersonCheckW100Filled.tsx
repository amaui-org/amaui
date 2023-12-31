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
      <path d="M702-517 597-622l20-19 85 85 170-170 20 20-190 189Zm-342 5q-45 0-76.5-31.5T252-620q0-45 31.5-76.5T360-728q45 0 76.5 31.5T468-620q0 45-31.5 76.5T360-512ZM92-232v-52q0-22 13.5-41.5T142-356q55-26 109.5-39T360-408q54 0 108.5 13T578-356q23 11 36.5 30.5T628-284v52H92Z"/>
    </Icon>
  );
});

IconMaterialPersonCheckW100Filled.displayName = 'AmauiIconMaterialPersonCheckW100Filled';

export default IconMaterialPersonCheckW100Filled;
