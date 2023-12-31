import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHumidityHelperW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityHelperW100'

      short_name='HumidityHelper'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-132q-111.388 0-189.694-76.707Q132-285.414 132-395.472 132-448 153.5-496q21.5-48 56.5-86l148-145q17.315-17 42.157-17Q425-744 442-727l148 145q35 38 56.5 86.04Q668-447.919 668-395.284 668-285 589.694-208.5 511.388-132 400-132Zm0-28q100 0 170-68.21 70-68.209 70-166.79 0-47.287-18-90.046-18-42.759-52-74.954L422-706q-9-9-22-9t-22 9L230-560q-34 32.195-52 74.954-18 42.759-18 90.046 0 98.581 70 166.79Q300-160 400-160Zm313-398q0-64.583-45.208-109.792Q622.583-713 558-713q64.583 0 109.792-45.208Q713-803.417 713-868q0 64.583 45.208 109.792Q803.417-713 868-713q-64.583 0-109.792 45.208Q713-622.583 713-558ZM400-395Z"/>
    </Icon>
  );
});

IconMaterialHumidityHelperW100.displayName = 'AmauiIconMaterialHumidityHelperW100';

export default IconMaterialHumidityHelperW100;
