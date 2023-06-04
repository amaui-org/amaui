import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEndocrinologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EndocrinologyW100Filled'

      short_name='Endocrinology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M216 730V360q-27-23-50-51.5T125 248q-3-5-1-10.5t7-7.5q6-2 12 .5t9 8.5q51 88 138 140.5T480 432q102 0 188.5-51.5T806 242q4-7 10-11t13-1q5 2 6.5 8t-1.5 11q-18 32-40.5 60T744 360v370q0 42 20 77.5t54 57.5q5 3 7 9t0 12q-2 5-7 7t-10-1q-42-25-67-68t-25-94V382q-51 37-111 57.5T480 460q-65 0-125-20.5T244 382v348q0 51-25 94t-68 68q-5 3-10 1t-7-7q-2-6 0-12t7-9q34-22 54.5-57.5T216 730Zm197 74q-34 0-57.5-23.5T332 723V553q0-8 6-12.5t14-1.5l8 3q42 16 72.5 46.5T480 657q16-38 47-67t73-48l8-3q8-3 14 1.5t6 12.5v170q0 34-23.5 57.5T547 804q-21 0-38.5-9.5T480 769q-11 16-28.5 25.5T413 804Z"/>
    </Icon>
  );
});

IconMaterialEndocrinologyW100Filled.displayName = 'AmauiIconMaterialEndocrinologyW100Filled';

export default IconMaterialEndocrinologyW100Filled;
