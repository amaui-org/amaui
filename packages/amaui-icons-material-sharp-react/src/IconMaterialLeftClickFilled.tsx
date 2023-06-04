import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeftClickFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftClickFilled'

      short_name='LeftClick'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M468 816q-96-5-162-74t-66-166q0-100 70-170t170-70q97 0 166 66t74 162l-84-25q-13-54-56-88.5T480 416q-66 0-113 47t-47 113q0 57 34.5 100t88.5 56l25 84Zm353 180L650 825l-50 151-120-400 400 120-151 50 171 171-79 79Z"/>
    </Icon>
  );
});

IconMaterialLeftClickFilled.displayName = 'AmauiIconMaterialLeftClickFilled';

export default IconMaterialLeftClickFilled;
