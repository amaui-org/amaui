import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBreakfastDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BreakfastDiningFilled'

      short_name='BreakfastDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21V10.45q-.925-.55-1.462-1.463Q2 8.075 2 7q0-1.65 1.175-2.825Q4.35 3 6 3h12q1.65 0 2.825 1.175Q22 5.35 22 7q0 1.075-.538 1.987Q20.925 9.9 20 10.45V21Zm8-3.6 4.4-4.4L12 8.6 7.6 13Zm0-2.8L10.4 13l1.6-1.6 1.6 1.6Z"/>
    </Icon>
  );
});

IconMaterialBreakfastDiningFilled.displayName = 'AmauiIconMaterialBreakfastDiningFilled';

export default IconMaterialBreakfastDiningFilled;
