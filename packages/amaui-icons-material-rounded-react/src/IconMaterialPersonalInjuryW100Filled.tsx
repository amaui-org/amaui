import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonalInjuryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalInjuryW100Filled'

      short_name='PersonalInjury'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 9.55q-1.125 0-1.912-.788Q9.3 7.975 9.3 6.85t.788-1.913Q10.875 4.15 12 4.15t1.913.787q.787.788.787 1.913t-.787 1.912q-.788.788-1.913.788Zm-1.6 9.1q-.475 0-.812-.338-.338-.337-.338-.812 0-.475.338-.812.337-.338.812-.338h2.8l-1.15 2.3Zm-5.1.7v-4.6q0-.55.338-1.038.337-.487.912-.762 1.25-.6 2.675-.95 1.425-.35 2.775-.35.775 0 1.637.125.863.125 1.688.375l-1.775 3.5H10.4q-.8 0-1.325.525-.525.525-.525 1.325 0 .8.525 1.325.525.525 1.325.525Zm10.725 0v-6.975q.35.125.738.275.387.15.687.3.575.275.913.762.337.488.337 1.038v3.1q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialPersonalInjuryW100Filled.displayName = 'AmauiIconMaterialPersonalInjuryW100Filled';

export default IconMaterialPersonalInjuryW100Filled;
