import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEcgW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EcgW100Filled'

      short_name='Ecg'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 562V368q0-26 17-43t43-17h576q26 0 43 17t17 43v223q-5-1-9-1h-9q-23 0-45.5 6T720 613q-16-10-32.5-16t-33.5-8q0-11-9-19t-21-8h-95l-76-152q-2-3-5.5-4.5T440 404q-4 0-7 1.5t-5 4.5L280 704l-68-134q-2-4-5-6t-7-2h-68Zm60 282q-26 0-43-17t-17-43V590h59l76 152q2 4 5.5 6t7.5 2q4 0 7-2t5-5l148-295 68 134q2 4 5 6t7 2h85q-63 10-107 61.5T454 769q0 22 3.5 38.5T471 844H192Zm438-154q16 0 30.5 7t30.5 21l29 26 28-25q17-15 31.5-22t30.5-7q31 0 53.5 23.5T886 769q0 25-23 51.5T758 918l-18 16q-8 8-20 8t-20-8l-18-16q-82-71-105-97.5T554 769q0-32 22.5-55.5T630 690Z"/>
    </Icon>
  );
});

IconMaterialEcgW100Filled.displayName = 'AmauiIconMaterialEcgW100Filled';

export default IconMaterialEcgW100Filled;
