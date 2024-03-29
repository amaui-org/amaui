import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHematology = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hematology'

      short_name='Hematology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M520 1016q-73 0-116.5-61T360 816q0-78 43.5-139T520 616q73 0 116.5 61T680 816q0 78-43.5 139T520 1016Zm-342-28-76-24q31-94 44.5-191.5T160 576q0-99-13.5-196.5T102 188l76-24q33 100 47.5 203T240 576q0 106-14.5 209T178 988Zm604 0q-33-100-47.5-203T720 576q0-106 14.5-209T782 164l76 24q-31 94-44.5 191.5T800 576q0 99 13.5 196.5T858 964l-76 24Zm-262-52q40 0 60-37.5t20-82.5q0-45-20-82.5T520 696q-40 0-60 37.5T440 816q0 45 20 82.5t60 37.5Zm-31-48q9 8 21 8t21-9q14-14 21.5-32.5T560 816q0-20-7-38.5T532 745q-8-9-20.5-9t-21.5 8q-9 8-9.5 21t7.5 22l6 8.5q6 8.5 6 20.5t-6 20.5l-6 8.5q-9 9-8.5 22t9.5 21Zm-49-352q-73 0-116.5-61T280 336q0-78 43.5-139T440 136q73 0 116.5 61T600 336q0 78-43.5 139T440 536Zm0-80q40 0 60-37.5t20-82.5q0-45-20-82.5T440 216q-40 0-60 37.5T360 336q0 45 20 82.5t60 37.5Zm30-48q9-8 9.5-21t-7.5-22q-5-6-8.5-13.5T460 336q0-8 3.5-15.5T472 307q8-9 8-21.5t-9-21.5q-9-8-21-8t-21 9q-14 14-21.5 32.5T400 336q0 20 7 38.5t21 32.5q9 9 21 9t21-8Zm-30-72Zm80 480Z"/>
    </Icon>
  );
});

IconMaterialHematology.displayName = 'AmauiIconMaterialHematology';

export default IconMaterialHematology;
