import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrivacyScreen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyScreen'

      short_name='PrivacyScreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m160 480 144-144H160v144Zm0 280 423-424H416L160 593v167Zm56 56h584V336H696L216 816Zm-56 80q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v480q0 33-23.5 56.5T800 896H160Z"/>
    </Icon>
  );
});

IconMaterialPrivacyScreen.displayName = 'AmauiIconMaterialPrivacyScreen';

export default IconMaterialPrivacyScreen;
