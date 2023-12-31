import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackW100'

      short_name='Stack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-372q-25 0-42.5-17.5T132-432v-336q0-25 17.5-42.5T192-828h336q25 0 42.5 17.5T588-768v66q0 6-4 10t-10 4q-6 0-10-4t-4-10v-66q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v336q0 14 9 23t23 9h66q6 0 10 4t4 10q0 6-4 10t-10 4h-66Zm240 240q-25 0-42.5-17.5T372-192v-336q0-25 17.5-42.5T432-588h336q25 0 42.5 17.5T828-528v336q0 25-17.5 42.5T768-132H432Zm0-28h336q14 0 23-9t9-23v-336q0-14-9-23t-23-9H432q-14 0-23 9t-9 23v336q0 14 9 23t23 9Zm168-200Z"/>
    </Icon>
  );
});

IconMaterialStackW100.displayName = 'AmauiIconMaterialStackW100';

export default IconMaterialStackW100;
