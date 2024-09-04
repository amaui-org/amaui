import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial24fpsSelectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='24fpsSelectFilled'

      short_name='24fpsSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-200h80v200h-80Zm160 0v-200h80v200h-80Zm160 0v-200h80v200h-80Zm160 0v-200h240v200H600Zm80-320v-120H520v-280h80v200h80v-200h80v200h80v80h-80v120h-80Zm-480 0v-160q0-33 23.5-56.5T280-640h80v-80H200v-80h160q33 0 56.5 23.5T440-720v80q0 33-23.5 56.5T360-560h-80v80h160v80H200Z"/>
    </Icon>
  );
});

IconMaterial24fpsSelectFilled.displayName = 'AmauiIconMaterial24fpsSelectFilled';

export default IconMaterial24fpsSelectFilled;
