import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectWindow2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectWindow2'

      short_name='SelectWindow2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160h480v-360H160v360Zm560-200v-80h80v-360H320v200h-80v-280h640v520H720ZM80-80v-520h640v520H80Zm480-603ZM400-340Z"/>
    </Icon>
  );
});

IconMaterialSelectWindow2.displayName = 'AmauiIconMaterialSelectWindow2';

export default IconMaterialSelectWindow2;
