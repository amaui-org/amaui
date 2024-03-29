import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddHomeWork = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeWork'

      short_name='AddHomeWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 17v-5h6v5-5H5v5Zm12-9ZM1 19V9l7-5 7 5v.675q-.575.275-1.075.637-.5.363-.925.813V10L8 6.45 3 10v7h2v-5h6v5h.075q.075.525.225 1.025.15.5.375.975H9v-5H7v5ZM23 1v10.125q-.425-.45-.925-.813-.5-.362-1.075-.637V3h-9v1.4l-2-1.45V1Zm-6 6h2V5h-2Zm1 14q-2.075 0-3.537-1.462Q13 18.075 13 16q0-2.075 1.463-3.538Q15.925 11 18 11t3.538 1.462Q23 13.925 23 16q0 2.075-1.462 3.538Q20.075 21 18 21Zm-.5-2h1v-2.5H21v-1h-2.5V13h-1v2.5H15v1h2.5Z"/>
    </Icon>
  );
});

IconMaterialAddHomeWork.displayName = 'AmauiIconMaterialAddHomeWork';

export default IconMaterialAddHomeWork;
