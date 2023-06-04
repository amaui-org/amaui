import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSleepW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SleepW100'

      short_name='Sleep'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M483 924q-73.091 0-137.045-27.5Q282 869 234 821t-75.5-111.955Q131 645.091 131 572q0-108 59.5-196.5T350 247q0 92 34 176t99 149q65 65 149 99t176 34q-40 100-128.5 159.5T483 924Zm0-28q88 0 163-44t118-121.277q-86-8.029-163-43.656-77-35.628-138-96.848Q402 529 366 452.5T323 290q-77 43-120.5 118.5T159 572q0 135 94.5 229.5T483 896Zm-20-306Zm233-177-30.312-66.688L599 316l66.688-30.312L696 219l30.312 66.688L793 316l-66.688 30.312L696 413Z"/>
    </Icon>
  );
});

IconMaterialSleepW100.displayName = 'AmauiIconMaterialSleepW100';

export default IconMaterialSleepW100;
