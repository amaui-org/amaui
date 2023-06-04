import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterBottleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterBottleFilled'

      short_name='WaterBottle'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m320 976-40-440 19-10q8-5 14-12t6-17q0-9-4-17t-12-12l-23-12 40-160h140v-40h-60v-80h200v80h-60v40h140l39 158-23 12q-8 4-12 12t-4 17q0 10 6 17.5t14 12.5l19 9-39 442H320Z"/>
    </Icon>
  );
});

IconMaterialWaterBottleFilled.displayName = 'AmauiIconMaterialWaterBottleFilled';

export default IconMaterialWaterBottleFilled;
