import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabMoveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabMoveFilled'

      short_name='TabMove'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 936V736h80v120h560V376H200v120h-80V216h720v720H120Zm340-140-56-56 83-84H120v-80h367l-83-84 56-56 180 180-180 180Z"/>
    </Icon>
  );
});

IconMaterialTabMoveFilled.displayName = 'AmauiIconMaterialTabMoveFilled';

export default IconMaterialTabMoveFilled;
