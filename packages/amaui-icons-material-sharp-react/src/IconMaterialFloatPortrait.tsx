import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloatPortrait = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatPortrait'

      short_name='FloatPortrait'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 976V176h640v440h-80V256H240v640h280v80H160Zm440 0V696h200v280H600ZM480 576Z"/>
    </Icon>
  );
});

IconMaterialFloatPortrait.displayName = 'AmauiIconMaterialFloatPortrait';

export default IconMaterialFloatPortrait;
