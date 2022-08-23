import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMenuOpenRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuOpenRoundedFilled'
      short_name='MenuOpen'

      {...props}
    >
      <path d="M4 18Q3.575 18 3.288 17.712Q3 17.425 3 17Q3 16.575 3.288 16.288Q3.575 16 4 16H15Q15.425 16 15.713 16.288Q16 16.575 16 17Q16 17.425 15.713 17.712Q15.425 18 15 18ZM4 13Q3.575 13 3.288 12.712Q3 12.425 3 12Q3 11.575 3.288 11.287Q3.575 11 4 11H12Q12.425 11 12.713 11.287Q13 11.575 13 12Q13 12.425 12.713 12.712Q12.425 13 12 13ZM4 8Q3.575 8 3.288 7.713Q3 7.425 3 7Q3 6.575 3.288 6.287Q3.575 6 4 6H15Q15.425 6 15.713 6.287Q16 6.575 16 7Q16 7.425 15.713 7.713Q15.425 8 15 8ZM17.4 12 20.3 14.9Q20.575 15.175 20.575 15.6Q20.575 16.025 20.3 16.3Q20.025 16.575 19.6 16.575Q19.175 16.575 18.9 16.3L15.3 12.7Q15 12.4 15 12Q15 11.6 15.3 11.3L18.9 7.7Q19.175 7.425 19.6 7.425Q20.025 7.425 20.3 7.7Q20.575 7.975 20.575 8.4Q20.575 8.825 20.3 9.1Z"/>
    </Icon>
  );
});

IconMaterialMenuOpenRoundedFilled.displayName = 'AmauiIconMaterialMenuOpenRoundedFilled';

export default IconMaterialMenuOpenRoundedFilled;
