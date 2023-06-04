import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrivacyScreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyScreenW100'

      short_name='PrivacyScreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m160 517 181-181H160v181Zm0 280 460-461H379L160 556v241Zm19 19h621V336H659L179 816Zm-47 28V308h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialPrivacyScreenW100.displayName = 'AmauiIconMaterialPrivacyScreenW100';

export default IconMaterialPrivacyScreenW100;
