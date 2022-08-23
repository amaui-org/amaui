import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignVerticalTopRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalTopRoundedW100'
      short_name='AlignVerticalTop'

      {...props}
    >
      <path d="M3.65 4.625Q3.5 4.625 3.4 4.525Q3.3 4.425 3.3 4.275Q3.3 4.125 3.4 4.025Q3.5 3.925 3.65 3.925H20.35Q20.5 3.925 20.6 4.025Q20.7 4.125 20.7 4.275Q20.7 4.425 20.6 4.525Q20.5 4.625 20.35 4.625ZM8.775 20.05Q8.425 20.05 8.163 19.788Q7.9 19.525 7.9 19.175V8.25Q7.9 7.9 8.163 7.637Q8.425 7.375 8.775 7.375Q9.125 7.375 9.387 7.637Q9.65 7.9 9.65 8.25V19.175Q9.65 19.525 9.387 19.788Q9.125 20.05 8.775 20.05ZM15.225 14.05Q14.875 14.05 14.613 13.787Q14.35 13.525 14.35 13.175V8.25Q14.35 7.9 14.613 7.637Q14.875 7.375 15.225 7.375Q15.575 7.375 15.838 7.637Q16.1 7.9 16.1 8.25V13.175Q16.1 13.525 15.838 13.787Q15.575 14.05 15.225 14.05Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalTopRoundedW100.displayName = 'AmauiIconMaterialAlignVerticalTopRoundedW100';

export default IconMaterialAlignVerticalTopRoundedW100;
