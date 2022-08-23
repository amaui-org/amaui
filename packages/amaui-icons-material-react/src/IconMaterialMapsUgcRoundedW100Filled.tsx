import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMapsUgcRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapsUgcRoundedW100Filled'
      short_name='MapsUgc'

      {...props}
    >
      <path d="M3.3 19.775 4.35 16.2Q3.875 15.2 3.588 14.15Q3.3 13.1 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Q10.9 20.7 9.85 20.413Q8.8 20.125 7.8 19.65L4.225 20.7Q3.8 20.825 3.488 20.512Q3.175 20.2 3.3 19.775ZM12 15.35Q12.15 15.35 12.25 15.25Q12.35 15.15 12.35 15V12.35H15Q15.15 12.35 15.25 12.25Q15.35 12.15 15.35 12Q15.35 11.85 15.25 11.75Q15.15 11.65 15 11.65H12.35V9Q12.35 8.85 12.25 8.75Q12.15 8.65 12 8.65Q11.85 8.65 11.75 8.75Q11.65 8.85 11.65 9V11.65H9Q8.85 11.65 8.75 11.75Q8.65 11.85 8.65 12Q8.65 12.15 8.75 12.25Q8.85 12.35 9 12.35H11.65V15Q11.65 15.15 11.75 15.25Q11.85 15.35 12 15.35Z"/>
    </Icon>
  );
});

IconMaterialMapsUgcRoundedW100Filled.displayName = 'AmauiIconMaterialMapsUgcRoundedW100Filled';

export default IconMaterialMapsUgcRoundedW100Filled;
