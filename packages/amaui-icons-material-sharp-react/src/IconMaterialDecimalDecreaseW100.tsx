import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDecimalDecreaseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DecimalDecreaseW100'

      short_name='DecimalDecrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.05 20.425-3.075-3.075 3.075-3.075.5.475L13.325 17h7v.7h-7l2.225 2.25Zm-10.125-7.65v-1.3h1.3v1.3Zm5.325 0q-1.05 0-1.787-.738-.738-.737-.738-1.787v-4q0-1.05.738-1.788.737-.737 1.787-.737 1.05 0 1.788.737.737.738.737 1.788v4q0 1.05-.737 1.787-.738.738-1.788.738Zm0-.7q.75 0 1.288-.538.537-.537.537-1.287v-4q0-.75-.537-1.288-.538-.537-1.288-.537t-1.287.537q-.538.538-.538 1.288v4q0 .75.538 1.287.537.538 1.287.538Z"/>
    </Icon>
  );
});

IconMaterialDecimalDecreaseW100.displayName = 'AmauiIconMaterialDecimalDecreaseW100';

export default IconMaterialDecimalDecreaseW100;
