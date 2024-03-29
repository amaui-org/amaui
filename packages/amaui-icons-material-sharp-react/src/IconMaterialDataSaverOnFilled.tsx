import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataSaverOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataSaverOnFilled'

      short_name='DataSaverOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 16v-3H8v-2h3V8h2v3h3v2h-3v3Zm10.15.05-2.6-1.5q.225-.6.338-1.238Q19 12.675 19 12q0-2.675-1.712-4.638Q15.575 5.4 13 5.05v-3q3.8.375 6.4 3.2Q22 8.075 22 12q0 1.1-.2 2.125t-.65 1.925ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.15-1.35-1.362-2.137-3.187Q2 14.05 2 12q0-3.925 2.6-6.75t6.4-3.2v3q-2.575.35-4.287 2.312Q5 9.325 5 12q0 2.9 2.05 4.95Q9.1 19 12 19q1.65 0 3.088-.7 1.437-.7 2.412-1.9l2.6 1.5q-1.35 1.875-3.475 2.987Q14.5 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialDataSaverOnFilled.displayName = 'AmauiIconMaterialDataSaverOnFilled';

export default IconMaterialDataSaverOnFilled;
