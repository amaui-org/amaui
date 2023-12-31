import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureSmallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureSmallW100Filled'

      short_name='PictureInPictureSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-28h668v-508h28v536H132Zm264-128v-224h304v224H396Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureSmallW100Filled.displayName = 'AmauiIconMaterialPictureInPictureSmallW100Filled';

export default IconMaterialPictureInPictureSmallW100Filled;
