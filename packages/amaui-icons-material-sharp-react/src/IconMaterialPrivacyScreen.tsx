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
      <path d="m160 480 144-144H160v144Zm0 280 423-424H416L160 593v167Zm56 56h584V336H696L216 816ZM80 896V256h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialPrivacyScreen.displayName = 'AmauiIconMaterialPrivacyScreen';

export default IconMaterialPrivacyScreen;
