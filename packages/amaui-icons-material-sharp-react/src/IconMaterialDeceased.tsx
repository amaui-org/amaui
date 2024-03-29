import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeceased = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Deceased'

      short_name='Deceased'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M426 896q-9-26-23-48t-33-41q-19-19-41-33.5T281 750q2 29 14 54t32 45q20 20 45 32.5t54 14.5Zm108 0q29-3 54-15t45-32q20-20 32-45t15-54q-26 9-48.5 23T590 806q-19 19-33 41.5T534 896Zm-54-360q66 0 113-47t47-113v-48l-70 59-90-109-90 109-70-59v48q0 66 47 113t113 47Zm-40 440q-100 0-170-70t-70-170v-80q71-1 134 29t106 81V613q-86-14-143-80.5T240 376V153l140 121 100-121 100 121 140-121v223q0 90-57 156.5T520 613v153q43-51 106-81t134-29v80q0 100-70 170t-170 70h-80Zm40-569Zm127 416Zm-253 0Z"/>
    </Icon>
  );
});

IconMaterialDeceased.displayName = 'AmauiIconMaterialDeceased';

export default IconMaterialDeceased;
