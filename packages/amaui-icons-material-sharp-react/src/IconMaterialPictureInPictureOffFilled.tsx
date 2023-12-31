import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureOffFilled'

      short_name='PictureInPictureOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M818-28 686-160H80v-640h80l80 80H126L26-820l57-57L875-85l-57 57Zm62-166L634-440h126v-240H440v46L274-800h606v606Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureOffFilled.displayName = 'AmauiIconMaterialPictureInPictureOffFilled';

export default IconMaterialPictureInPictureOffFilled;
