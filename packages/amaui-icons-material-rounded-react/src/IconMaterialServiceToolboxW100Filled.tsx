import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialServiceToolboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ServiceToolboxW100Filled'

      short_name='ServiceToolbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-212q-11 0-19.5-8.5T132-240v-176h174v26q0 6 4 10t10 4q6 0 10-4t4-10v-26h292v26q0 6 4 10t10 4q6 0 10-4t4-10v-26h174v176q0 11-8.5 19.5T800-212H160Zm-24-232 92-208q3-8 9.5-12t14.5-4h90v-48q0-11 8.5-19.5T370-744h220q11 0 19.5 8.5T618-716v48h90q8 0 14.5 4t9.5 12l92 208H654v-26q0-6-4-10t-10-4q-6 0-10 4t-4 10v26H334v-26q0-6-4-10t-10-4q-6 0-10 4t-4 10v26H136Zm234-224h220v-48H370v48Z"/>
    </Icon>
  );
});

IconMaterialServiceToolboxW100Filled.displayName = 'AmauiIconMaterialServiceToolboxW100Filled';

export default IconMaterialServiceToolboxW100Filled;
