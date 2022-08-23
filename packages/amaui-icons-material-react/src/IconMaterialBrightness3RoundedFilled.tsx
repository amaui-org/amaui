import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness3RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness3RoundedFilled'
      short_name='Brightness3'

      {...props}
    >
      <path d="M19 12Q19 14.025 18.263 15.8Q17.525 17.575 16.225 18.925Q14.925 20.275 13.163 21.087Q11.4 21.9 9.35 22Q8.925 22.025 8.637 21.712Q8.35 21.4 8.35 20.975Q8.35 20.725 8.45 20.513Q8.55 20.3 8.75 20.175Q10.8 18.725 11.9 16.6Q13 14.475 13 12Q13 9.525 11.9 7.4Q10.8 5.275 8.75 3.825Q8.55 3.7 8.45 3.487Q8.35 3.275 8.35 3.025Q8.35 2.6 8.637 2.287Q8.925 1.975 9.35 2Q11.4 2.1 13.163 2.912Q14.925 3.725 16.225 5.075Q17.525 6.425 18.263 8.2Q19 9.975 19 12Z"/>
    </Icon>
  );
});

IconMaterialBrightness3RoundedFilled.displayName = 'AmauiIconMaterialBrightness3RoundedFilled';

export default IconMaterialBrightness3RoundedFilled;
