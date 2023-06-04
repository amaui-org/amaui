import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStepsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepsW100'

      short_name='Steps'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M216 502q33 0 64 12.5t56 35.5l362 346h62q17 0 28.5-11.5T800 856q0-8-1.5-17T788 821L605 638l-71-214-137 34q-14 4-25.5-5.5T360 429V281l-28-14-153 205q-5 7-9 14.5t-6 15.5h52Zm0 28h-54q2 14 7.5 26t16.5 22l326 297q11 11 25 16t29 5h91L317 570q-20-20-46.5-30T216 530Zm350 394q-20 0-38.5-7T494 896L169 601q-31-29-35-70t21-75l155-206q6-8 15.5-10.5T344 242l29 14q8 4 11.5 10.5T388 281v151l139-36q11-3 20 2.5t13 16.5l69 207 179 179q12 12 16 26t4 29q0 28-19.5 48T760 924H566Z"/>
    </Icon>
  );
});

IconMaterialStepsW100.displayName = 'AmauiIconMaterialStepsW100';

export default IconMaterialStepsW100;
