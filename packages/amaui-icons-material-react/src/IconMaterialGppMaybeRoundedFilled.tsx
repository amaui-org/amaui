import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGppMaybeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GppMaybeRoundedFilled'
      short_name='GppMaybe'

      {...props}
    >
      <path d="M12 12Q12.425 12 12.713 11.712Q13 11.425 13 11V8Q13 7.575 12.713 7.287Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8V11Q11 11.425 11.288 11.712Q11.575 12 12 12ZM12 16Q12.425 16 12.713 15.712Q13 15.425 13 15Q13 14.575 12.713 14.287Q12.425 14 12 14Q11.575 14 11.288 14.287Q11 14.575 11 15Q11 15.425 11.288 15.712Q11.575 16 12 16ZM12 21.925Q11.875 21.925 11.75 21.925Q11.625 21.925 11.525 21.875Q8.25 20.85 6.125 17.812Q4 14.775 4 11.1V6.375Q4 5.75 4.363 5.25Q4.725 4.75 5.3 4.525L11.3 2.275Q11.65 2.15 12 2.15Q12.35 2.15 12.7 2.275L18.7 4.525Q19.275 4.75 19.638 5.25Q20 5.75 20 6.375V11.1Q20 14.775 17.875 17.812Q15.75 20.85 12.475 21.875Q12.35 21.925 12 21.925Z"/>
    </Icon>
  );
});

IconMaterialGppMaybeRoundedFilled.displayName = 'AmauiIconMaterialGppMaybeRoundedFilled';

export default IconMaterialGppMaybeRoundedFilled;
