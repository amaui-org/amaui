import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBreakfastDining = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BreakfastDining'

      short_name='BreakfastDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21V10.45q-.925-.55-1.462-1.463Q2 8.075 2 7q0-1.65 1.175-2.825Q4.35 3 6 3h12q1.65 0 2.825 1.175Q22 5.35 22 7q0 1.075-.538 1.987Q20.925 9.9 20 10.45V21Zm2-2h12V9.3l1-.6q.45-.275.725-.725Q20 7.525 20 7q0-.825-.587-1.412Q18.825 5 18 5H6q-.825 0-1.412.588Q4 6.175 4 7q0 .55.263 1.012.262.463.737.738l1 .55Zm6-1.6 4.4-4.4L12 8.6 7.6 13Zm0-2.8L10.4 13l1.6-1.6 1.6 1.6Zm0-2.6Z"/>
    </Icon>
  );
});

IconMaterialBreakfastDining.displayName = 'AmauiIconMaterialBreakfastDining';

export default IconMaterialBreakfastDining;
