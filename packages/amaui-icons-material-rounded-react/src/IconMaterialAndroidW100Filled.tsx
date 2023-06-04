import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAndroidW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AndroidW100Filled'

      short_name='Android'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.2 16.725q.2-2.15 1.325-3.95 1.125-1.8 3-2.85L6.05 7.375q-.125-.2-.062-.387.062-.188.262-.313.2-.1.375-.038.175.063.3.238L8.4 9.45q1.725-.725 3.6-.725t3.6.725l1.475-2.575q.125-.175.3-.238.175-.062.375.038.2.125.262.313.063.187-.062.387l-1.475 2.55q1.875 1.05 3 2.85t1.325 3.95Zm4.8-2.2q.425 0 .713-.287Q9 13.95 9 13.525t-.287-.713q-.288-.287-.713-.287t-.713.287Q7 13.1 7 13.525t.287.713q.288.287.713.287Zm8 0q.425 0 .712-.287.288-.288.288-.713t-.288-.713q-.287-.287-.712-.287t-.712.287Q15 13.1 15 13.525t.288.713q.287.287.712.287Z"/>
    </Icon>
  );
});

IconMaterialAndroidW100Filled.displayName = 'AmauiIconMaterialAndroidW100Filled';

export default IconMaterialAndroidW100Filled;
