import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStockpotW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StockpotW100Filled'

      short_name='Stockpot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M262-212q-37.5 0-63.75-26.25T172-302v-325q0-5.95 4.025-9.975Q180.05-641 186-641h588q5.95 0 9.975 4.025Q788-632.95 788-627v325q0 37.5-26.25 63.75T698-212H262Zm124-517v-28q0-13.175 8.5-22.088Q403-788 416.495-788h127.01q13.495 0 21.995 8.912Q574-770.175 574-757v28h200q5.95 0 9.975 4.035 4.025 4.035 4.025 10T783.975-705q-4.025 4-9.975 4H186q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h200Z"/>
    </Icon>
  );
});

IconMaterialStockpotW100Filled.displayName = 'AmauiIconMaterialStockpotW100Filled';

export default IconMaterialStockpotW100Filled;
