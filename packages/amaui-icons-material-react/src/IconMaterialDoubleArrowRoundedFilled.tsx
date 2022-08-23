import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoubleArrowRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoubleArrowRoundedFilled'
      short_name='DoubleArrow'

      {...props}
    >
      <path d="M13.925 19Q13.3 19 13.038 18.462Q12.775 17.925 13.125 17.425L17 12L13.125 6.575Q12.775 6.075 13.038 5.537Q13.3 5 13.925 5Q14.2 5 14.425 5.137Q14.65 5.275 14.8 5.475L19.025 11.425Q19.125 11.55 19.175 11.7Q19.225 11.85 19.225 12Q19.225 12.15 19.175 12.287Q19.125 12.425 19.025 12.575L14.8 18.525Q14.65 18.725 14.425 18.863Q14.2 19 13.925 19ZM7.975 19Q7.35 19 7.088 18.462Q6.825 17.925 7.175 17.425L11.05 12L7.175 6.575Q6.825 6.075 7.088 5.537Q7.35 5 7.975 5Q8.25 5 8.475 5.137Q8.7 5.275 8.85 5.475L13.075 11.425Q13.175 11.55 13.225 11.7Q13.275 11.85 13.275 12Q13.275 12.15 13.225 12.3Q13.175 12.45 13.075 12.575L8.85 18.525Q8.7 18.725 8.475 18.863Q8.25 19 7.975 19Z"/>
    </Icon>
  );
});

IconMaterialDoubleArrowRoundedFilled.displayName = 'AmauiIconMaterialDoubleArrowRoundedFilled';

export default IconMaterialDoubleArrowRoundedFilled;
