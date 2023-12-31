import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeveloperModeTvFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperModeTvFilled'

      short_name='DeveloperModeTv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120v-80H80v-640h800v640H640v80H320ZM192-520l104-104-56-56L80-520l160 160 56-56-104-104Zm576 0L664-416l56 56 160-160-160-160-56 56 104 104Z"/>
    </Icon>
  );
});

IconMaterialDeveloperModeTvFilled.displayName = 'AmauiIconMaterialDeveloperModeTvFilled';

export default IconMaterialDeveloperModeTvFilled;
