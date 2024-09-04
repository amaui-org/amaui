import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAvc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Avc'

      short_name='Avc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M180-360h60v-60h60v60h60v-240H180v240Zm60-120v-60h60v60h-60Zm210 120h60l70-240h-60l-40 137-40-137h-60l70 240Zm150 0h180v-80h-60v20h-60v-120h60v20h60v-80H600v240ZM40-160v-640h880v640H40Zm80-80h720v-480H120v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialAvc.displayName = 'AmauiIconMaterialAvc';

export default IconMaterialAvc;
