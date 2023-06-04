import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOphthalmologyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OphthalmologyW100'

      short_name='Ophthalmology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M416 240q5-5 10.5-5t9.5 5l55 58q5 5 6.5 12t-.5 13q-2 6-7 10t-12 4q-80 0-137 42.5T259 482q-5 11-13 19.5t-19 8.5h-66q-6 0-10-4t-4-10q0-6 4-10t10-4h67q29-74 92-121t144-53l-48-48q-4-5-4-10.5t4-9.5Zm193 336q0-42 20-78.5t52-50.5q-23-35-52.5-58.5T564 352q-6-2-9-7.5t-1-11.5q2-6 8-8t12 0q45 16 78 44.5t59 73.5q36 6 61 44t25 89q0 46-22.5 84T711 710q-24 43-59 72.5T572 828q-6 2-12-.5t-8-8.5q-2-6 1.5-11t9.5-7q37-14 66.5-38t51.5-58q-27-13-49.5-48.5T609 576Zm94 106q25 0 45.5-33t20.5-73q0-42-20-74t-46-32q-26 0-46 32t-20 74q0 40 20.5 73t45.5 33ZM418 912q-4-5-4-10.5t4-9.5l48-48q-81-6-144-53t-92-121h-67q-6 0-10-4t-4-10q0-6 4-10t10-4h66q11 0 19 8.5t13 19.5q25 60 82 102.5T480 815q7 0 12 4t7 10q2 6 1.5 12.5T495 855l-57 57q-4 4-9.5 4.5T418 912Zm285-336Z"/>
    </Icon>
  );
});

IconMaterialOphthalmologyW100.displayName = 'AmauiIconMaterialOphthalmologyW100';

export default IconMaterialOphthalmologyW100;
