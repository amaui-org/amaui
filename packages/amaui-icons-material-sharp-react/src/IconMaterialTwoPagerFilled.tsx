import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTwoPagerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TwoPagerFilled'

      short_name='TwoPager'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm440-80h280v-480H520v480Zm-320-80h200v-80H200v80Zm0-120h200v-80H200v80Zm0-120h200v-80H200v80Zm360 240h200v-80H560v80Zm0-120h200v-80H560v80Zm0-120h200v-80H560v80Z"/>
    </Icon>
  );
});

IconMaterialTwoPagerFilled.displayName = 'AmauiIconMaterialTwoPagerFilled';

export default IconMaterialTwoPagerFilled;
