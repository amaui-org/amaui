import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroupAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupAddW100Filled'

      short_name='GroupAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.2 18.2v-1.3q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q7.55 13.8 8.9 13.8t2.713.325q1.362.325 2.737.975.575.275.913.763.337.487.337 1.037v1.3Zm6.7-7q-1.125 0-1.912-.788Q6.2 9.625 6.2 8.5t.788-1.912Q7.775 5.8 8.9 5.8t1.912.788q.788.787.788 1.912t-.788 1.912q-.787.788-1.912.788Zm3.85-.05q.5-.525.675-1.225.175-.7.175-1.425 0-.725-.175-1.425-.175-.7-.675-1.225 1.025.075 1.688.838.662.762.662 1.812t-.662 1.812q-.663.763-1.688.838Zm4.85 7.05v-1.3q0-.675-.225-1.3t-.775-1q.95.275 1.725.825.775.55.775 1.475v1.3Zm1.5-5.85v-2h-2v-.7h2v-2h.7v2h2v.7h-2v2Z"/>
    </Icon>
  );
});

IconMaterialGroupAddW100Filled.displayName = 'AmauiIconMaterialGroupAddW100Filled';

export default IconMaterialGroupAddW100Filled;
