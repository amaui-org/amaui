import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckbook = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Checkbook'

      short_name='Checkbook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360h280l80-80H240v80Zm0-160h240v-80H240v80Zm-80-160v400h280l-80 80H80v-560h800v120h-80v-40H160Zm756 212q5 5 5 11t-5 11l-36 36-70-70 36-36q5-5 11-5t11 5l48 48ZM520-120v-70l266-266 70 70-266 266h-70ZM160-680v400-400Z"/>
    </Icon>
  );
});

IconMaterialCheckbook.displayName = 'AmauiIconMaterialCheckbook';

export default IconMaterialCheckbook;
