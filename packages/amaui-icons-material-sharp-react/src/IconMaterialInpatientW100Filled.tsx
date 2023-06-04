import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInpatientW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InpatientW100Filled'

      short_name='Inpatient'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.575 14.575 16 12l2.575-2.575.5.475-1.75 1.75h4.1v.7h-4.1l1.75 1.75ZM3.6 20.7V3.3H14v17.4Zm.7-8.525q.375-.425.888-.65Q5.7 11.3 6.3 11.3h5q.6 0 1.113.225.512.225.887.65V4h-9ZM8.8 9q-.575 0-.962-.387-.388-.388-.388-.963t.388-.962Q8.225 6.3 8.8 6.3t.962.388q.388.387.388.962t-.388.963Q9.375 9 8.8 9Zm-.35 9.35h.7v-2h2v-.7h-2v-2h-.7v2h-2v.7h2Z"/>
    </Icon>
  );
});

IconMaterialInpatientW100Filled.displayName = 'AmauiIconMaterialInpatientW100Filled';

export default IconMaterialInpatientW100Filled;
