import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureW100'

      short_name='PictureInPicture'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.4 12.6H19V7h-7.6Zm-8.1 6.1V5.3h17.4v13.4ZM4 18V6Zm0 0h16V6H4Zm8.1-6.1V7.7h6.2v4.2Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureW100.displayName = 'AmauiIconMaterialPictureInPictureW100';

export default IconMaterialPictureInPictureW100;
