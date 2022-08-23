import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBedroomBabySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomBabySharpFilled'
      short_name='BedroomBaby'

      {...props}
    >
      <path d="M12 18Q14 18 15.8 17.25Q17.6 16.5 19 15.1L17.95 14.05Q17.675 14.325 17.413 14.537Q17.15 14.75 16.85 14.95L16 13.5V11H17V10H11.4L9.65 7H6L7 7.75L5.5 9.5L6.45 10.5L8 9.5V13.5L7.15 14.95Q6.85 14.75 6.588 14.537Q6.325 14.325 6.05 14.05L5 15.1Q6.4 16.5 8.2 17.25Q10 18 12 18ZM12 16.5Q11.05 16.5 10.163 16.312Q9.275 16.125 8.45 15.7L9.3 14.25Q10.625 14.75 12 14.75Q13.375 14.75 14.7 14.25L15.55 15.7Q14.725 16.075 13.838 16.288Q12.95 16.5 12 16.5ZM2 22V2H22V22Z"/>
    </Icon>
  );
});

IconMaterialBedroomBabySharpFilled.displayName = 'AmauiIconMaterialBedroomBabySharpFilled';

export default IconMaterialBedroomBabySharpFilled;
