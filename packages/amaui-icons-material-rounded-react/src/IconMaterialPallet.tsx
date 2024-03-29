import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPallet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pallet'

      short_name='Pallet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20v1.25q0 .425-.287.712-.288.288-.713.288H3q-.425 0-.712-.288Q2 21.675 2 21.25V19q0-.425.288-.712Q2.575 18 3 18h18q.425 0 .712.288.288.287.288.712v2.25q0 .425-.288.712-.287.288-.712.288h-1q-.425 0-.712-.288Q19 21.675 19 21.25V20h-5.5v1.25q0 .425-.287.712-.288.288-.713.288h-1q-.425 0-.712-.288-.288-.287-.288-.712V20Zm1-4q-.425 0-.713-.288Q5 15.425 5 15V3q0-.425.287-.713Q5.575 2 6 2h12q.425 0 .712.287Q19 2.575 19 3v12q0 .425-.288.712Q18.425 16 18 16Zm1-2h10V4H7Zm7-6q.425 0 .713-.287Q15 7.425 15 7t-.287-.713Q14.425 6 14 6h-4q-.425 0-.712.287Q9 6.575 9 7t.288.713Q9.575 8 10 8Zm-7 6V4v10Z"/>
    </Icon>
  );
});

IconMaterialPallet.displayName = 'AmauiIconMaterialPallet';

export default IconMaterialPallet;
