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
      <path d="m160 517 181-181H192q-12 0-22 10t-10 22v149Zm0 280 460-461H379L160 556v241Zm19 19h589q12 0 22-10t10-22V368q0-12-10-22t-22-10H659L179 816Zm13 28q-26 0-43-17t-17-43V368q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialPrivacyScreenW100.displayName = 'AmauiIconMaterialPrivacyScreenW100';

export default IconMaterialPrivacyScreenW100;
