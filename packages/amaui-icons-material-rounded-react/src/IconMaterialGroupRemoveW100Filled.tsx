import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroupRemoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupRemoveW100Filled'

      short_name='GroupRemove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.75 11.15q.5-.525.675-1.225.175-.7.175-1.425 0-.725-.175-1.425-.175-.7-.675-1.225 1.025.075 1.688.838.662.762.662 1.812t-.662 1.812q-.663.763-1.688.838Zm4.6 7.05q.125-.125.188-.287.062-.163.062-.413v-.6q0-.675-.225-1.3t-.775-1q.95.275 1.725.825.775.55.775 1.475v.55q0 .325-.212.537-.213.213-.538.213Zm.1-7.85q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-8.55.85q-1.125 0-1.912-.788Q6.2 9.625 6.2 8.5t.788-1.912Q7.775 5.8 8.9 5.8t1.912.788q.788.787.788 1.912t-.788 1.912q-.787.788-1.912.788Zm-5.95 7q-.325 0-.537-.213-.213-.212-.213-.537v-.55q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q7.55 13.8 8.9 13.8t2.713.325q1.362.325 2.737.975.575.275.913.763.337.487.337 1.037v.55q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialGroupRemoveW100Filled.displayName = 'AmauiIconMaterialGroupRemoveW100Filled';

export default IconMaterialGroupRemoveW100Filled;
