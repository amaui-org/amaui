import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTapAndPlayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapAndPlayFilled'

      short_name='TapAndPlay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 23v-2h1V6H7v6H5V1h14v22ZM5 23v-2q.825 0 1.412.587Q7 22.175 7 23Zm4 0q0-1.65-1.175-2.825Q6.65 19 5 19v-2q2.5 0 4.25 1.75T11 23Zm4 0q0-3.35-2.325-5.675Q8.35 15 5 15v-2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.138 3.175Q15 20.925 15 23Z"/>
    </Icon>
  );
});

IconMaterialTapAndPlayFilled.displayName = 'AmauiIconMaterialTapAndPlayFilled';

export default IconMaterialTapAndPlayFilled;
