import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBluetoothSearchingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothSearchingFilled'

      short_name='BluetoothSearching'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 22v-7.6L4.4 19 3 17.6 8.6 12 3 6.4 4.4 5 9 9.6V2h1l5.7 5.7-4.3 4.3 4.3 4.3L10 22Zm2-12.4 1.9-1.9L11 5.85Zm0 8.55 1.9-1.85-1.9-1.9Zm5.55-3.8L14.25 12l2.3-2.3q.225.55.363 1.125.137.575.137 1.175 0 .6-.137 1.188-.138.587-.363 1.162Zm2.95 2.85L18.25 16q.5-.925.775-1.938Q19.3 13.05 19.3 12q0-1.05-.275-2.062Q18.75 8.925 18.25 8l1.25-1.25q.725 1.2 1.113 2.525Q21 10.6 21 12q0 1.4-.387 2.712-.388 1.313-1.113 2.488Z"/>
    </Icon>
  );
});

IconMaterialBluetoothSearchingFilled.displayName = 'AmauiIconMaterialBluetoothSearchingFilled';

export default IconMaterialBluetoothSearchingFilled;
