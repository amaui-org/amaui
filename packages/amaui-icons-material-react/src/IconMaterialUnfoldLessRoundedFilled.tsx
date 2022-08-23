import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnfoldLessRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldLessRoundedFilled'
      short_name='UnfoldLess'

      {...props}
    >
      <path d="M12 9.475Q11.8 9.475 11.613 9.4Q11.425 9.325 11.3 9.2L8.2 6.1Q7.925 5.825 7.925 5.4Q7.925 4.975 8.2 4.7Q8.475 4.425 8.9 4.425Q9.325 4.425 9.6 4.7L12 7.1L14.4 4.7Q14.675 4.425 15.1 4.425Q15.525 4.425 15.8 4.7Q16.075 4.975 16.075 5.4Q16.075 5.825 15.8 6.1L12.7 9.2Q12.55 9.35 12.375 9.412Q12.2 9.475 12 9.475ZM8.2 19.3Q7.925 19.025 7.925 18.6Q7.925 18.175 8.2 17.9L11.3 14.8Q11.45 14.65 11.625 14.588Q11.8 14.525 12 14.525Q12.2 14.525 12.388 14.588Q12.575 14.65 12.7 14.8L15.825 17.925Q16.1 18.2 16.087 18.612Q16.075 19.025 15.8 19.3Q15.525 19.575 15.1 19.575Q14.675 19.575 14.4 19.3L12 16.9L9.6 19.3Q9.325 19.575 8.9 19.575Q8.475 19.575 8.2 19.3Z"/>
    </Icon>
  );
});

IconMaterialUnfoldLessRoundedFilled.displayName = 'AmauiIconMaterialUnfoldLessRoundedFilled';

export default IconMaterialUnfoldLessRoundedFilled;
