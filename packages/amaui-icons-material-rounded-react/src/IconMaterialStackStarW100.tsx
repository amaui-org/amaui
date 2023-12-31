import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackStarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackStarW100'

      short_name='StackStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m600-304 52 32q5 2 8.5-1t2.5-8l-14-59 45-39q4-3 2.5-7.5T690-392l-59-5-24-56q-2-5-7-5t-7 5l-24 56-59 5q-5 1-6.5 5.5t2.5 7.5l45 39-14 59q-1 5 2.5 8t8.5 1l52-32Zm-408-68q-25 0-42.5-17.5T132-432v-336q0-25 17.5-42.5T192-828h336q25 0 42.5 17.5T588-768v66q0 6-4 10t-10 4q-6 0-10-4t-4-10v-66q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v336q0 14 9 23t23 9h66q6 0 10 4t4 10q0 6-4 10t-10 4h-66Zm240 240q-25 0-42.5-17.5T372-192v-336q0-25 17.5-42.5T432-588h336q25 0 42.5 17.5T828-528v336q0 25-17.5 42.5T768-132H432Zm0-28h336q14 0 23-9t9-23v-336q0-14-9-23t-23-9H432q-14 0-23 9t-9 23v336q0 14 9 23t23 9Zm168-200Z"/>
    </Icon>
  );
});

IconMaterialStackStarW100.displayName = 'AmauiIconMaterialStackStarW100';

export default IconMaterialStackStarW100;
