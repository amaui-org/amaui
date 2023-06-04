import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplay10W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Replay10W100'

      short_name='Replay10'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.6 0-3-.6t-2.45-1.65Q5.5 17.4 4.9 16q-.6-1.4-.6-3H5q0 2.925 2.038 4.962Q9.075 20 12 20t4.962-2.038Q19 15.925 19 13t-2.038-4.963Q14.925 6 12 6h-.45l1.65 1.65-.5.5-2.5-2.525L12.75 3.1l.5.5-1.7 1.7H12q1.6 0 3 .6t2.45 1.65Q18.5 8.6 19.1 10q.6 1.4.6 3t-.6 3q-.6 1.4-1.65 2.45Q16.4 19.5 15 20.1q-1.4.6-3 .6Zm-2.45-5.1v-4.5H8.2v-.7h2.05v5.2Zm3.2 0q-.425 0-.712-.288-.288-.287-.288-.712v-3.2q0-.425.288-.712.287-.288.712-.288h1.7q.425 0 .713.288.287.287.287.712v3.2q0 .425-.287.712-.288.288-.713.288Zm0-.7h1.7q.15 0 .225-.075.075-.075.075-.225v-3.2q0-.15-.075-.225-.075-.075-.225-.075h-1.7q-.15 0-.225.075-.075.075-.075.225v3.2q0 .15.075.225.075.075.225.075Z"/>
    </Icon>
  );
});

IconMaterialReplay10W100.displayName = 'AmauiIconMaterialReplay10W100';

export default IconMaterialReplay10W100;
