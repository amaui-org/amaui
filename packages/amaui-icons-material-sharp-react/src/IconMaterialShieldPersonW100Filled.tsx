import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldPersonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldPersonW100Filled'

      short_name='ShieldPerson'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-466q48 0 81-33t33-81q0-48-33-81t-81-33q-48 0-81 33t-33 81q0 48 33 81t81 33Zm0 332q-124-39-196-145t-72-237v-208l268-100 268 100v208q0 131-72 237T480-134Zm0-30q52-17 95-50t74-78q-39-20-81.5-31T480-334q-45 0-87.5 11T311-292q31 45 74 78t95 50Z"/>
    </Icon>
  );
});

IconMaterialShieldPersonW100Filled.displayName = 'AmauiIconMaterialShieldPersonW100Filled';

export default IconMaterialShieldPersonW100Filled;
