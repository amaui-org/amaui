import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGoToLineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GoToLineFilled'

      short_name='GoToLine'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M420 376V256h120v120H420Zm0 520V776h120v120H420Z"/>
    </Icon>
  );
});

IconMaterialGoToLineFilled.displayName = 'AmauiIconMaterialGoToLineFilled';

export default IconMaterialGoToLineFilled;
