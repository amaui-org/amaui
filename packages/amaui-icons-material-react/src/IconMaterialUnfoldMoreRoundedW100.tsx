import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnfoldMoreRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldMoreRoundedW100'
      short_name='UnfoldMore'

      {...props}
    >
      <path d="M8.6 7.85Q8.475 7.725 8.475 7.6Q8.475 7.475 8.6 7.35L11.475 4.475Q11.6 4.35 11.738 4.3Q11.875 4.25 12 4.25Q12.15 4.25 12.275 4.3Q12.4 4.35 12.525 4.475L15.4 7.35Q15.525 7.475 15.525 7.6Q15.525 7.725 15.4 7.85Q15.275 7.975 15.15 7.975Q15.025 7.975 14.9 7.85L12 4.95L9.1 7.85Q8.975 7.975 8.85 7.975Q8.725 7.975 8.6 7.85ZM12 19.75Q11.875 19.75 11.738 19.7Q11.6 19.65 11.475 19.525L8.6 16.65Q8.475 16.525 8.475 16.4Q8.475 16.275 8.6 16.15Q8.725 16.025 8.85 16.025Q8.975 16.025 9.1 16.15L12 19.05L14.9 16.15Q15.025 16.025 15.15 16.025Q15.275 16.025 15.4 16.15Q15.525 16.275 15.525 16.4Q15.525 16.525 15.4 16.65L12.525 19.525Q12.4 19.65 12.275 19.7Q12.15 19.75 12 19.75Z"/>
    </Icon>
  );
});

IconMaterialUnfoldMoreRoundedW100.displayName = 'AmauiIconMaterialUnfoldMoreRoundedW100';

export default IconMaterialUnfoldMoreRoundedW100;
