import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBiotechSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BiotechSharpW100Filled'
      short_name='Biotech'

      {...props}
    >
      <path d="M6.15 20.35V19.65H11.15V16.35H10.5Q8.7 16.35 7.425 15.075Q6.15 13.8 6.15 12Q6.15 10.65 6.838 9.625Q7.525 8.6 8.65 8.1Q8.65 8.3 8.688 8.462Q8.725 8.625 8.775 8.8Q7.975 9.2 7.413 10.037Q6.85 10.875 6.85 12Q6.85 13.525 7.912 14.587Q8.975 15.65 10.5 15.65H17.85V16.35H11.85V19.65H17.85V20.35ZM14.7 11.45 14.35 10.5 13.4 10.9 12.875 9.425Q13.1 9.15 13.225 8.787Q13.35 8.425 13.35 8Q13.35 7.125 12.838 6.5Q12.325 5.875 11.525 5.7L11 4.25L11.95 3.9L11.6 2.95L12.55 2.6L12.9 3.55L13.75 3.25L16.15 9.8L15.3 10.15L15.65 11.1ZM11 9.65Q10.325 9.65 9.838 9.175Q9.35 8.7 9.35 8Q9.35 7.325 9.838 6.837Q10.325 6.35 11 6.35Q11.7 6.35 12.175 6.825Q12.65 7.3 12.65 8Q12.65 8.675 12.175 9.162Q11.7 9.65 11 9.65Z"/>
    </Icon>
  );
});

IconMaterialBiotechSharpW100Filled.displayName = 'AmauiIconMaterialBiotechSharpW100Filled';

export default IconMaterialBiotechSharpW100Filled;
