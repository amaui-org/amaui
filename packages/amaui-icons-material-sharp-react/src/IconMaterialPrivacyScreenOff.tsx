import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrivacyScreenOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyScreenOff'

      short_name='PrivacyScreenOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M818 1028 686 896H80V299h9l-63-63 57-57 792 792-57 57ZM160 760l195-195-83-84-112 112v167Zm0-280 55 55-55-55Zm56 336h390L411 621 216 816Zm664 47-80-81V336H696L525 507l-56-56 114-115H416l-30 32-112-112h606v607ZM383 593Zm194-34Z"/>
    </Icon>
  );
});

IconMaterialPrivacyScreenOff.displayName = 'AmauiIconMaterialPrivacyScreenOff';

export default IconMaterialPrivacyScreenOff;
