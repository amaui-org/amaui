import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDrawCollageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DrawCollageW100Filled'

      short_name='DrawCollage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M548-132v-119l-107-17q-36-6-55.5-22.5T366-333q0-26 18.5-39.5T435-386q17 0 31 2.5t25 2.5q19 0 30.5-10.5T533-419q0-14-10-30t-30-33q-14-13-29.5-27T448-543q0-17 12-27.5t31-10.5q11 0 22.5 3t22.5 3q19 0 28-14.5t9-45.5q0-16-1.5-32t-1.5-30q0-44 21.5-67.5T649-788q34 0 56.5 19.5T728-718q0 28-13.5 51T701-623q0 16 10 27.5t25 11.5q9 0 18-3.5t22-3.5q26 0 45.5 19t19.5 47q0 26-18 45t-53 31q-26 9-39 20.5T717-403q-1 15 15 28.5t45 22.5q27 8 39 20t12 31q0 35-31.5 45T740-240l-80 19v89H548Zm-391-40-26-12 179-392 26 11-179 393Zm9-378q-16-23-25-49.5t-9-55.5q0-72 49.5-122.5T303-828q29 0 56.5 9t50.5 26l-20 19q-19-13-40.5-19.5T305-800q-60 0-102.5 42.5T160-655q0 23 6.5 44.5T186-570l-20 20Z"/>
    </Icon>
  );
});

IconMaterialDrawCollageW100Filled.displayName = 'AmauiIconMaterialDrawCollageW100Filled';

export default IconMaterialDrawCollageW100Filled;
