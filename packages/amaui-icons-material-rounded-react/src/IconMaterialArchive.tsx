import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArchive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Archive'

      short_name='Archive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V6.5q0-.375.125-.675.125-.3.325-.575l1.4-1.7q.2-.275.5-.413Q5.65 3 6 3h12q.35 0 .65.137.3.138.5.413l1.4 1.7q.2.275.325.575.125.3.125.675V19q0 .825-.587 1.413Q19.825 21 19 21Zm.4-15h13.2l-.85-1H6.25ZM5 19h14V8H5v11Zm7-1.425q.2 0 .375-.063.175-.062.325-.212l2.6-2.6q.275-.275.275-.7 0-.425-.275-.7-.275-.275-.7-.275-.425 0-.7.275l-.9.9V11q0-.425-.287-.713Q12.425 10 12 10t-.712.287Q11 10.575 11 11v3.2l-.9-.9q-.275-.275-.7-.275-.425 0-.7.275-.275.275-.275.7 0 .425.275.7l2.6 2.6q.15.15.325.212.175.063.375.063ZM5 19V8v11Z"/>
    </Icon>
  );
});

IconMaterialArchive.displayName = 'AmauiIconMaterialArchive';

export default IconMaterialArchive;
