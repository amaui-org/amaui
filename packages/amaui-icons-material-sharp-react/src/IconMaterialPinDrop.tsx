import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinDrop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinDrop'

      short_name='PinDrop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.475q2.475-2 3.738-3.85Q17 10.775 17 9.15q0-1.4-.512-2.388-.513-.987-1.263-1.6-.75-.612-1.625-.887T12 4q-.725 0-1.6.275-.875.275-1.625.887-.75.613-1.262 1.6Q7 7.75 7 9.15q0 1.625 1.262 3.475 1.263 1.85 3.738 3.85ZM12 19q-3.525-2.6-5.263-5.05Q5 11.5 5 9.15q0-1.775.638-3.113Q6.275 4.7 7.275 3.8q1-.9 2.25-1.35Q10.775 2 12 2t2.475.45q1.25.45 2.25 1.35 1 .9 1.638 2.237Q19 7.375 19 9.15q0 2.35-1.738 4.8Q15.525 16.4 12 19Zm0-8q.825 0 1.413-.588Q14 9.825 14 9t-.587-1.413Q12.825 7 12 7q-.825 0-1.412.587Q10 8.175 10 9q0 .825.588 1.412Q11.175 11 12 11ZM5 22v-2h14v2Zm7-12.85Z"/>
    </Icon>
  );
});

IconMaterialPinDrop.displayName = 'AmauiIconMaterialPinDrop';

export default IconMaterialPinDrop;
