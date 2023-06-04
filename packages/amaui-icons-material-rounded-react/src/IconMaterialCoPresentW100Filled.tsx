import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCoPresentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoPresentW100Filled'

      short_name='CoPresent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21 19.15v-14q0-.35-.225-.575-.225-.225-.575-.225H3.8q-.35 0-.575.225Q3 4.8 3 5.15v7.2h-.7v-7.2q0-.625.438-1.063.437-.437 1.062-.437h16.4q.625 0 1.063.437.437.438.437 1.063v12.825q0 .375-.187.688-.188.312-.513.487ZM9 13.2q-1.125 0-1.912-.788Q6.3 11.625 6.3 10.5t.788-1.912Q7.875 7.8 9 7.8t1.913.788q.787.787.787 1.912t-.787 1.912Q10.125 13.2 9 13.2Zm-6.7 7v-1.3q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q7.65 15.8 9 15.8t2.713.325q1.362.325 2.737.975.575.275.913.763.337.487.337 1.037v1.3Z"/>
    </Icon>
  );
});

IconMaterialCoPresentW100Filled.displayName = 'AmauiIconMaterialCoPresentW100Filled';

export default IconMaterialCoPresentW100Filled;
