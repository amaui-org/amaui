import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureOffW100'

      short_name='PictureInPictureOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M616-456h144v-224H456v64l28 28v-64h248v168H588l28 28Zm184 184v-448H352l-28-28h504v504l-28-28ZM420-480Zm156-16ZM852-68 708-212H132v-536h80l28 28h-80v480h520L90-830l20-20L872-88l-20 20Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureOffW100.displayName = 'AmauiIconMaterialPictureInPictureOffW100';

export default IconMaterialPictureInPictureOffW100;
