import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataSaverOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataSaverOn'

      short_name='DataSaverOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q-.425 0-.712-.288Q11 15.425 11 15v-2H9q-.425 0-.712-.288Q8 12.425 8 12t.288-.713Q8.575 11 9 11h2V9q0-.425.288-.713Q11.575 8 12 8t.713.287Q13 8.575 13 9v2h2q.425 0 .713.287.287.288.287.713t-.287.712Q15.425 13 15 13h-2v2q0 .425-.287.712Q12.425 16 12 16Zm9.15.05-2.6-1.5q.225-.6.338-1.238Q19 12.675 19 12q0-2.675-1.712-4.638Q15.575 5.4 13 5.05v-3q3.8.375 6.4 3.2Q22 8.075 22 12q0 1.1-.2 2.125t-.65 1.925ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.15-1.35-1.362-2.137-3.187Q2 14.05 2 12q0-3.925 2.6-6.75t6.4-3.2v3q-2.575.35-4.287 2.312Q5 9.325 5 12q0 2.9 2.05 4.95Q9.1 19 12 19q1.65 0 3.088-.7 1.437-.7 2.412-1.9l2.6 1.5q-1.35 1.875-3.475 2.987Q14.5 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialDataSaverOn.displayName = 'AmauiIconMaterialDataSaverOn';

export default IconMaterialDataSaverOn;
