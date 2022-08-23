import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPagesRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PagesRoundedFilled'
      short_name='Pages'

      {...props}
    >
      <path d="M12 16.275Q12.125 16.275 12.262 16.2Q12.4 16.125 12.45 15.975L13.55 13.55L15.975 12.45Q16.125 12.4 16.2 12.262Q16.275 12.125 16.275 12Q16.275 11.875 16.2 11.738Q16.125 11.6 15.975 11.55L13.55 10.45L12.45 8.025Q12.4 7.875 12.262 7.8Q12.125 7.725 12 7.725Q11.875 7.725 11.738 7.8Q11.6 7.875 11.55 8.025L10.45 10.45L8.025 11.55Q7.875 11.6 7.8 11.738Q7.725 11.875 7.725 12Q7.725 12.125 7.8 12.262Q7.875 12.4 8.025 12.45L10.45 13.55L11.55 15.975Q11.6 16.125 11.738 16.2Q11.875 16.275 12 16.275ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialPagesRoundedFilled.displayName = 'AmauiIconMaterialPagesRoundedFilled';

export default IconMaterialPagesRoundedFilled;
