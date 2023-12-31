import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureLargeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureLargeW100'

      short_name='PictureInPictureLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M236-340v-384h464v384H236ZM132-212v-28h668v-508h28v536H132Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureLargeW100.displayName = 'AmauiIconMaterialPictureInPictureLargeW100';

export default IconMaterialPictureInPictureLargeW100;
