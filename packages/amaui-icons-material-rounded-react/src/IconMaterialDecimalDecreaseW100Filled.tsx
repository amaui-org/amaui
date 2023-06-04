import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDecimalDecreaseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DecimalDecreaseW100Filled'

      short_name='DecimalDecrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.075 17.7 1.975 2q.1.1.113.25.012.15-.113.25t-.25.1q-.125 0-.225-.1l-2.3-2.325q-.225-.225-.225-.525 0-.3.225-.525l2.3-2.3q.1-.1.237-.113.138-.012.263.088.1.1.1.25t-.1.25l-2 2h6.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-7.6-4.925h.2q-.325 0-.537-.213-.213-.212-.213-.537v.2q0-.325.213-.537.212-.213.537-.213h-.2q-.5 0-.437.075.062.075.325.188.262.112.562.25.3.137.3.237v-.2q0-.5-.075-.438-.075.063-.187.325-.113.263-.25.563-.138.3-.238.3Zm4.775 0q-1.05 0-1.787-.738-.738-.737-.738-1.787v-4q0-1.05.738-1.788.737-.737 1.787-.737 1.05 0 1.788.737.737.738.737 1.788v4q0 1.05-.737 1.787-.738.738-1.788.738Zm0-.7q.75 0 1.288-.538.537-.537.537-1.287v-4q0-.75-.537-1.288-.538-.537-1.288-.537t-1.287.537q-.538.538-.538 1.288v4q0 .75.538 1.287.537.538 1.287.538Z"/>
    </Icon>
  );
});

IconMaterialDecimalDecreaseW100Filled.displayName = 'AmauiIconMaterialDecimalDecreaseW100Filled';

export default IconMaterialDecimalDecreaseW100Filled;
