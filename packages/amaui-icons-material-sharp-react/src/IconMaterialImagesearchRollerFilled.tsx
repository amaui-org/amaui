import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImagesearchRollerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImagesearchRollerFilled'

      short_name='ImagesearchRoller'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 23v-8h2v-3H2V4h4V2h14v6H6V6H4v4h10v5h2v8Z"/>
    </Icon>
  );
});

IconMaterialImagesearchRollerFilled.displayName = 'AmauiIconMaterialImagesearchRollerFilled';

export default IconMaterialImagesearchRollerFilled;
