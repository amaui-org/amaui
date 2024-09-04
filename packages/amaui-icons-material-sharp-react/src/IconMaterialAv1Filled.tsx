import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAv1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Av1Filled'

      short_name='Av1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M180-360h60v-60h60v60h60v-240H180v240Zm60-120v-60h60v60h-60Zm230 120h60l70-240h-60l-40 137-40-137h-60l70 240Zm250 0h60v-240H660v60h60v180ZM40-160v-640h880v640H40Z"/>
    </Icon>
  );
});

IconMaterialAv1Filled.displayName = 'AmauiIconMaterialAv1Filled';

export default IconMaterialAv1Filled;
