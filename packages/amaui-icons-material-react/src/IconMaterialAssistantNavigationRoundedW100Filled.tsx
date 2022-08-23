import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssistantNavigationRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantNavigationRoundedW100Filled'
      short_name='AssistantNavigation'

      {...props}
    >
      <path d="M9.475 15.6 11.825 14.525Q11.9 14.475 12 14.475Q12.1 14.475 12.175 14.525L14.525 15.6Q14.775 15.725 14.975 15.537Q15.175 15.35 15.05 15.1L12.375 8.6Q12.275 8.35 12 8.35Q11.725 8.35 11.625 8.6L8.95 15.1Q8.825 15.35 9.025 15.537Q9.225 15.725 9.475 15.6ZM12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Z"/>
    </Icon>
  );
});

IconMaterialAssistantNavigationRoundedW100Filled.displayName = 'AmauiIconMaterialAssistantNavigationRoundedW100Filled';

export default IconMaterialAssistantNavigationRoundedW100Filled;
