import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArchiveRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchiveRoundedFilled'
      short_name='Archive'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V6.5Q3 6.125 3.125 5.825Q3.25 5.525 3.45 5.25L4.85 3.55Q5.05 3.275 5.35 3.137Q5.65 3 6 3H18Q18.35 3 18.65 3.137Q18.95 3.275 19.15 3.55L20.55 5.25Q20.75 5.525 20.875 5.825Q21 6.125 21 6.5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5.4 6H18.6L17.75 5H6.25ZM12 17.575Q12.2 17.575 12.375 17.512Q12.55 17.45 12.7 17.3L15.3 14.7Q15.575 14.425 15.575 14Q15.575 13.575 15.3 13.3Q15.025 13.025 14.6 13.025Q14.175 13.025 13.9 13.3L13 14.2V11Q13 10.575 12.713 10.287Q12.425 10 12 10Q11.575 10 11.288 10.287Q11 10.575 11 11V14.2L10.1 13.3Q9.825 13.025 9.4 13.025Q8.975 13.025 8.7 13.3Q8.425 13.575 8.425 14Q8.425 14.425 8.7 14.7L11.3 17.3Q11.45 17.45 11.625 17.512Q11.8 17.575 12 17.575Z"/>
    </Icon>
  );
});

IconMaterialArchiveRoundedFilled.displayName = 'AmauiIconMaterialArchiveRoundedFilled';

export default IconMaterialArchiveRoundedFilled;
