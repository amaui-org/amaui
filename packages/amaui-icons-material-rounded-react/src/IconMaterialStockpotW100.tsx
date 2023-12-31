import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStockpotW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StockpotW100'

      short_name='Stockpot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M262-212q-37.5 0-63.75-26.25T172-302v-325q0-5.95 4.025-9.975Q180.05-641 186-641h588q5.95 0 9.975 4.025Q788-632.95 788-627v325q0 37.5-26.25 63.75T698-212H262Zm-62-401v311q0 26.35 17.825 44.175Q235.65-240 262-240h436q26.35 0 44.175-17.825Q760-275.65 760-302v-311H200Zm186-116v-28q0-13.175 8.5-22.088Q403-788 416.495-788h127.01q13.495 0 21.995 8.912Q574-770.175 574-757v28h200q5.95 0 9.975 4.035 4.025 4.035 4.025 10T783.975-705q-4.025 4-9.975 4H186q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h200Zm94 302Z"/>
    </Icon>
  );
});

IconMaterialStockpotW100.displayName = 'AmauiIconMaterialStockpotW100';

export default IconMaterialStockpotW100;
