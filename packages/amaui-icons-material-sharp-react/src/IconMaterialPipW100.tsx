import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PipW100'

      short_name='Pip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-540v-28h161L56-804l20-20 236 236v-160h28v208H132Zm60 328q-26 0-43-17t-17-43v-168h28v168q0 14 9 23t23 9h276v28H192Zm608-240v-236q0-14-9-23t-23-9H440v-28h328q26 0 43 17t17 43v236h-28ZM568-212v-140h260v140H568Z"/>
    </Icon>
  );
});

IconMaterialPipW100.displayName = 'AmauiIconMaterialPipW100';

export default IconMaterialPipW100;
