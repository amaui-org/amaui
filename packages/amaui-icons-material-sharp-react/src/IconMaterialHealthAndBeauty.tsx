import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHealthAndBeauty = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthAndBeauty'

      short_name='HealthAndBeauty'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80 40-520l200-120v-240h160v240l200 120L440-80H200Zm440 0v-80h160v-80H640v-80h160v-80H640v-80h160v-80H640v-80h160v-80H640v-80h280v720H640Zm-384-80h128l118-326-124-74H262l-124 74 118 326Zm64-200Z"/>
    </Icon>
  );
});

IconMaterialHealthAndBeauty.displayName = 'AmauiIconMaterialHealthAndBeauty';

export default IconMaterialHealthAndBeauty;
