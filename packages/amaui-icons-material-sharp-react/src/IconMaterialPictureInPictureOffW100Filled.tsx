import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureOffW100Filled'

      short_name='PictureInPictureOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M852-68 708-212H132v-536h80l28 28h-40L90-830l20-20L872-88l-20 20Zm-24-176L616-456h144v-224H456v64L324-748h504v504Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureOffW100Filled.displayName = 'AmauiIconMaterialPictureInPictureOffW100Filled';

export default IconMaterialPictureInPictureOffW100Filled;
