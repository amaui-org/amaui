import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness5RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness5RoundedFilled'
      short_name='Brightness5'

      {...props}
    >
      <path d="M8.675 20H6.025Q5.2 20 4.613 19.413Q4.025 18.825 4.025 18V15.35L2.1 13.4Q1.525 12.825 1.525 12Q1.525 11.175 2.1 10.6L4.025 8.65V6Q4.025 5.175 4.613 4.588Q5.2 4 6.025 4H8.675L10.625 2.075Q11.2 1.5 12.025 1.5Q12.85 1.5 13.425 2.075L15.375 4H18.025Q18.85 4 19.438 4.588Q20.025 5.175 20.025 6V8.65L21.95 10.6Q22.525 11.175 22.525 12Q22.525 12.825 21.95 13.4L20.025 15.35V18Q20.025 18.825 19.438 19.413Q18.85 20 18.025 20H15.375L13.425 21.925Q12.85 22.5 12.025 22.5Q11.2 22.5 10.625 21.925ZM12.025 17Q9.95 17 8.488 15.537Q7.025 14.075 7.025 12Q7.025 9.925 8.488 8.462Q9.95 7 12.025 7Q14.1 7 15.563 8.462Q17.025 9.925 17.025 12Q17.025 14.075 15.563 15.537Q14.1 17 12.025 17ZM12.025 20.5 14.525 18H18.025V14.5L20.525 12L18.025 9.5V6H14.525L12.025 3.5L9.525 6H6.025V9.5L3.525 12L6.025 14.5V18H9.525Z"/>
    </Icon>
  );
});

IconMaterialBrightness5RoundedFilled.displayName = 'AmauiIconMaterialBrightness5RoundedFilled';

export default IconMaterialBrightness5RoundedFilled;
