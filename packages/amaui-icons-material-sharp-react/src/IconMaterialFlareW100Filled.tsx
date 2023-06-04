import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlareW100Filled'

      short_name='Flare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.6 12.35v-.7h4.7v.7ZM8.4 8.9 6.7 7.2l.5-.5 1.7 1.7Zm3.25-1.6V2.6h.7v4.7Zm3.95 1.6-.5-.5 1.7-1.7.5.5Zm1.1 3.45v-.7h4.7v.7ZM12 13.7q-.725 0-1.212-.488Q10.3 12.725 10.3 12t.488-1.213Q11.275 10.3 12 10.3t1.213.487q.487.488.487 1.213 0 .725-.487 1.212-.488.488-1.213.488Zm4.8 3.6-1.7-1.7.5-.5 1.7 1.7Zm-9.6 0-.5-.5 1.7-1.7.5.5Zm4.45 4.1v-4.7h.7v4.7Z"/>
    </Icon>
  );
});

IconMaterialFlareW100Filled.displayName = 'AmauiIconMaterialFlareW100Filled';

export default IconMaterialFlareW100Filled;
