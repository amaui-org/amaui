import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutgoingMailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutgoingMailW100Filled'

      short_name='OutgoingMail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19 20.075-.475-.475 2.2-2.25H15.65v-.7h5.075l-2.2-2.25.475-.475L22.075 17ZM4.15 18.35q-.625 0-1.062-.437-.438-.438-.438-1.063v-9.7q0-.625.438-1.063.437-.437 1.062-.437h12.7q.625 0 1.063.437.437.438.437 1.063v4.425h-.7V6.9l-7.25 5.3-7.05-5.3v9.95q0 .35.225.575.225.225.575.225h9.425v.7Zm-.4-12 6.65 5 6.85-5Z"/>
    </Icon>
  );
});

IconMaterialOutgoingMailW100Filled.displayName = 'AmauiIconMaterialOutgoingMailW100Filled';

export default IconMaterialOutgoingMailW100Filled;
