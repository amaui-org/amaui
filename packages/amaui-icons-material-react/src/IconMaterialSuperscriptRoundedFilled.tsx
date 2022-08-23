import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSuperscriptRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SuperscriptRoundedFilled'
      short_name='Superscript'

      {...props}
    >
      <path d="M20 9Q19.575 9 19.288 8.712Q19 8.425 19 8V7Q19 6.575 19.288 6.287Q19.575 6 20 6H22V5H19.5Q19.3 5 19.15 4.85Q19 4.7 19 4.5Q19 4.3 19.15 4.15Q19.3 4 19.5 4H22Q22.425 4 22.712 4.287Q23 4.575 23 5V6Q23 6.425 22.712 6.713Q22.425 7 22 7H20V8H22.5Q22.7 8 22.85 8.15Q23 8.3 23 8.5Q23 8.7 22.85 8.85Q22.7 9 22.5 9ZM7.925 20Q7.25 20 6.938 19.425Q6.625 18.85 6.975 18.275L10.5 12.725L7.3 7.725Q6.95 7.15 7.263 6.575Q7.575 6 8.225 6Q8.525 6 8.775 6.137Q9.025 6.275 9.175 6.525L11.95 11H12.05L14.8 6.525Q14.95 6.25 15.163 6.125Q15.375 6 15.75 6Q16.425 6 16.725 6.575Q17.025 7.15 16.675 7.725L13.475 12.725L17.025 18.25Q17.375 18.825 17.05 19.413Q16.725 20 16.075 20Q15.775 20 15.525 19.863Q15.275 19.725 15.125 19.475L12.05 14.575H11.95L8.875 19.475Q8.7 19.75 8.5 19.875Q8.3 20 7.925 20Z"/>
    </Icon>
  );
});

IconMaterialSuperscriptRoundedFilled.displayName = 'AmauiIconMaterialSuperscriptRoundedFilled';

export default IconMaterialSuperscriptRoundedFilled;
