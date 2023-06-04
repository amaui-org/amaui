import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSleepScoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SleepScoreW100'

      short_name='SleepScore'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M580 221q106 0 180 73.932T834 475h-28q0-45-16.5-85T744 320l-16 28q-10 16.235-21.5 35.515Q695 402.794 682 417q-8 8-18 8t-18-8q-8-8-8-18.684 0-10.684 8-18.316 13-14 32.855-24.656Q698.709 344.688 715 335l28-17q-31-32-72.78-50.5T580 249v-28Zm-97 703q-73.091 0-137.045-27.5Q282 869 234 821t-75.5-111.955Q131 645.091 131 572q0-108 59.5-196.5T350 247q0 92 34 176t99 149q65 65 149 99t176 34q-40 100-128.5 159.5T483 924Zm0-28q88 0 163-44t118-121.277q-86-8.029-163-43.656-77-35.628-138-96.848Q402 529 366 452.5T323 290q-77 43-120.5 118.5T159 572q0 135 94.5 229.5T483 896Zm-20-306Z"/>
    </Icon>
  );
});

IconMaterialSleepScoreW100.displayName = 'AmauiIconMaterialSleepScoreW100';

export default IconMaterialSleepScoreW100;
