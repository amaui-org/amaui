import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactPageRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPageRoundedW100Filled'
      short_name='ContactPage'

      {...props}
    >
      <path d="M12 13.4Q12.575 13.4 12.963 13.012Q13.35 12.625 13.35 12.05Q13.35 11.475 12.963 11.087Q12.575 10.7 12 10.7Q11.425 10.7 11.038 11.087Q10.65 11.475 10.65 12.05Q10.65 12.625 11.038 13.012Q11.425 13.4 12 13.4ZM8.65 16.6H15.35V16.575Q15.35 16.15 15.125 15.875Q14.9 15.6 14.525 15.425Q13.95 15.175 13.312 15.037Q12.675 14.9 12 14.9Q11.325 14.9 10.688 15.037Q10.05 15.175 9.475 15.425Q9.1 15.6 8.875 15.875Q8.65 16.15 8.65 16.575ZM17.2 20.7H6.8Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V4.8Q5.3 4.15 5.725 3.725Q6.15 3.3 6.8 3.3H12.825Q13.125 3.3 13.413 3.425Q13.7 3.55 13.9 3.75L18.25 8.1Q18.45 8.3 18.575 8.587Q18.7 8.875 18.7 9.175V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7Z"/>
    </Icon>
  );
});

IconMaterialContactPageRoundedW100Filled.displayName = 'AmauiIconMaterialContactPageRoundedW100Filled';

export default IconMaterialContactPageRoundedW100Filled;
