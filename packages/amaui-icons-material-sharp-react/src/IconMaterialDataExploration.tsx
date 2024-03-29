import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataExploration = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataExploration'

      short_name='DataExploration'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12v10Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 .575.075 1.125T4.3 14.2L8 10.5l3.3 2.775L14.575 10H13V8h5v5h-2v-1.575L11.4 16l-3.275-2.8-2.95 2.95q1.05 1.725 2.838 2.788Q9.8 20 12 20Zm7.5.5q.425 0 .712-.288.288-.287.288-.712t-.288-.712q-.287-.288-.712-.288t-.712.288q-.288.287-.288.712t.288.712q.287.288.712.288ZM11.375 12Z"/>
    </Icon>
  );
});

IconMaterialDataExploration.displayName = 'AmauiIconMaterialDataExploration';

export default IconMaterialDataExploration;
