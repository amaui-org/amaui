import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeceasedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeceasedFilled'

      short_name='Deceased'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 976q-100 0-170-70t-70-170v-80q71-1 134 29t106 81V613q-86-14-143-80.5T240 376V153l140 121 100-121 100 121 140-121v223q0 90-57 156.5T520 613v153q43-51 106-81t134-29v80q0 100-70 170t-170 70h-80Z"/>
    </Icon>
  );
});

IconMaterialDeceasedFilled.displayName = 'AmauiIconMaterialDeceasedFilled';

export default IconMaterialDeceasedFilled;
