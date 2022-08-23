import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnfoldLessRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldLessRoundedW100'
      short_name='UnfoldLess'

      {...props}
    >
      <path d="M12 8.7Q11.875 8.7 11.738 8.65Q11.6 8.6 11.475 8.475L8.65 5.65Q8.525 5.525 8.525 5.4Q8.525 5.275 8.65 5.15Q8.775 5.025 8.9 5.025Q9.025 5.025 9.15 5.15L12 8L14.85 5.15Q14.975 5.025 15.1 5.025Q15.225 5.025 15.35 5.15Q15.475 5.275 15.475 5.4Q15.475 5.525 15.35 5.65L12.525 8.475Q12.4 8.6 12.275 8.65Q12.15 8.7 12 8.7ZM8.65 18.85Q8.525 18.725 8.525 18.6Q8.525 18.475 8.65 18.35L11.475 15.525Q11.6 15.4 11.738 15.35Q11.875 15.3 12 15.3Q12.15 15.3 12.275 15.35Q12.4 15.4 12.525 15.525L15.35 18.35Q15.475 18.475 15.475 18.6Q15.475 18.725 15.35 18.85Q15.225 18.975 15.1 18.975Q14.975 18.975 14.85 18.85L12 16L9.15 18.85Q9.025 18.975 8.9 18.975Q8.775 18.975 8.65 18.85Z"/>
    </Icon>
  );
});

IconMaterialUnfoldLessRoundedW100.displayName = 'AmauiIconMaterialUnfoldLessRoundedW100';

export default IconMaterialUnfoldLessRoundedW100;
