import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureMobileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureMobileFilled'

      short_name='PictureInPictureMobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-80H160v-800h640v800ZM680-440v-320H440v320h240Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureMobileFilled.displayName = 'AmauiIconMaterialPictureInPictureMobileFilled';

export default IconMaterialPictureInPictureMobileFilled;
