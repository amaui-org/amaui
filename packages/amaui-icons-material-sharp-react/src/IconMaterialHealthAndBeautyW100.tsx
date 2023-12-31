import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHealthAndBeautyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthAndBeautyW100'

      short_name='HealthAndBeauty'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M234-132 102-498l188-112v-218h56v218l188 112-132 366H234Zm408 0v-28h160v-120H642v-28h160v-120H642v-28h160v-120H642v-28h160v-120H642v-28h216v620H642Zm-388-28h128l118-326-154-92h-56l-154 92 118 326Zm64-209Z"/>
    </Icon>
  );
});

IconMaterialHealthAndBeautyW100.displayName = 'AmauiIconMaterialHealthAndBeautyW100';

export default IconMaterialHealthAndBeautyW100;
