import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStepsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepsW100Filled'

      short_name='Steps'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M216 502h-81q2-12 7-23.5t13-22.5l155-206q6-8 15.5-10.5T344 242l29 14q8 4 11.5 10.5T388 281v151l139-36q11-3 20 2.5t13 16.5l69 207 179 179q12 12 16 26t4 29q0 28-19.5 48T760 924h-33L336 550q-25-23-56-35.5T216 502Zm350 422q-20 0-38.5-7T494 896L169 601q-16-14-24.5-32.5T134 530h82q28 0 54.5 10t46.5 30l369 354H566Z"/>
    </Icon>
  );
});

IconMaterialStepsW100Filled.displayName = 'AmauiIconMaterialStepsW100Filled';

export default IconMaterialStepsW100Filled;
