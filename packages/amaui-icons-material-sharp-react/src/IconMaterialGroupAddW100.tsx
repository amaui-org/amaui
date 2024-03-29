import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroupAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupAddW100'

      short_name='GroupAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.75 11.15q.5-.525.675-1.225.175-.7.175-1.425 0-.725-.175-1.425-.175-.7-.675-1.225 1.025.075 1.688.838.662.762.662 1.812t-.662 1.812q-.663.763-1.688.838Zm4.85 7.05v-1.3q0-.675-.225-1.3t-.775-1q.95.275 1.725.825.775.55.775 1.475v1.3Zm1.5-5.85v-2h-2v-.7h2v-2h.7v2h2v.7h-2v2ZM8.9 11.2q-1.125 0-1.912-.788Q6.2 9.625 6.2 8.5t.788-1.912Q7.775 5.8 8.9 5.8t1.912.788q.788.787.788 1.912t-.788 1.912q-.787.788-1.912.788Zm-6.7 7v-1.3q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q7.55 13.8 8.9 13.8t2.713.325q1.362.325 2.737.975.575.275.913.763.337.487.337 1.037v1.3Zm6.7-7.7q.825 0 1.412-.588.588-.587.588-1.412t-.588-1.412Q9.725 6.5 8.9 6.5t-1.412.588Q6.9 7.675 6.9 8.5t.588 1.412q.587.588 1.412.588Zm-6 7h12v-.6q0-.35-.237-.662-.238-.313-.663-.538-1.2-.575-2.487-.888Q10.225 14.5 8.9 14.5t-2.613.312Q5 15.125 3.8 15.7q-.425.225-.662.538-.238.312-.238.662Zm6-9Zm0 9Z"/>
    </Icon>
  );
});

IconMaterialGroupAddW100.displayName = 'AmauiIconMaterialGroupAddW100';

export default IconMaterialGroupAddW100;
