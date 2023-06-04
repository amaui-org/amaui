import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestWakeOnApproachW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnApproachW100'

      short_name='NestWakeOnApproach'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.625 11.2q-.275 0-.487-.213-.213-.212-.213-.487V5.55q0-.275.213-.488.212-.212.487-.212t.488.212q.212.213.212.488v4.95q0 .275-.212.487-.213.213-.488.213ZM10 11.2q-1.125 0-1.912-.788Q7.3 9.625 7.3 8.5t.788-1.912Q8.875 5.8 10 5.8t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm-6.7 7v-1.3q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q8.65 13.8 10 13.8t2.713.325q1.362.325 2.737.975.575.275.913.763.337.487.337 1.037v1.3Zm.7-.7h12v-.6q0-.35-.238-.662-.237-.313-.662-.538-1.2-.575-2.487-.888Q11.325 14.5 10 14.5t-2.612.312Q6.1 15.125 4.9 15.7q-.425.225-.662.538Q4 16.55 4 16.9Zm6-7q.825 0 1.413-.588Q12 9.325 12 8.5t-.587-1.412Q10.825 6.5 10 6.5q-.825 0-1.412.588Q8 7.675 8 8.5t.588 1.412q.587.588 1.412.588Zm0-2Zm0 9Z"/>
    </Icon>
  );
});

IconMaterialNestWakeOnApproachW100.displayName = 'AmauiIconMaterialNestWakeOnApproachW100';

export default IconMaterialNestWakeOnApproachW100;
