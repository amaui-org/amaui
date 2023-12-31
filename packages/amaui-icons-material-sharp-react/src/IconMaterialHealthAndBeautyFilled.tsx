import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHealthAndBeautyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthAndBeautyFilled'

      short_name='HealthAndBeauty'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-80v-80h160v-80H640v-80h160v-80H640v-80h160v-80H640v-80h160v-80H640v-80h280v720H640Zm-440 0L40-520l200-120v-240h160v240l200 120L440-80H200Z"/>
    </Icon>
  );
});

IconMaterialHealthAndBeautyFilled.displayName = 'AmauiIconMaterialHealthAndBeautyFilled';

export default IconMaterialHealthAndBeautyFilled;
