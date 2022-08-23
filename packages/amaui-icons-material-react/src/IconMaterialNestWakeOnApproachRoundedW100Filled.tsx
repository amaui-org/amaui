import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestWakeOnApproachRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnApproachRoundedW100Filled'
      short_name='NestWakeOnApproach'

      {...props}
    >
      <path d="M19.625 11.2q-.275 0-.487-.213-.213-.212-.213-.487V5.55q0-.275.213-.488.212-.212.487-.212t.488.212q.212.213.212.488v4.95q0 .275-.212.487-.213.213-.488.213ZM10 11.2q-1.125 0-1.912-.788Q7.3 9.625 7.3 8.5t.788-1.912Q8.875 5.8 10 5.8t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm-6.7 7v-1.3q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q8.65 13.8 10 13.8t2.713.325q1.362.325 2.737.975.575.275.913.763.337.487.337 1.037v1.3Z"/>
    </Icon>
  );
});

IconMaterialNestWakeOnApproachRoundedW100Filled.displayName = 'AmauiIconMaterialNestWakeOnApproachRoundedW100Filled';

export default IconMaterialNestWakeOnApproachRoundedW100Filled;
