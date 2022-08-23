import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimelineSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimelineSharp'
      short_name='Timeline'

      {...props}
    >
      <path d="M3 18Q2.175 18 1.588 17.413Q1 16.825 1 16Q1 15.175 1.588 14.587Q2.175 14 3 14Q3.15 14 3.263 14Q3.375 14 3.5 14.05L8.05 9.5Q8 9.375 8 9.262Q8 9.15 8 9Q8 8.175 8.588 7.587Q9.175 7 10 7Q10.825 7 11.413 7.587Q12 8.175 12 9Q12 9.05 11.95 9.5L14.5 12.05Q14.625 12 14.738 12Q14.85 12 15 12Q15.15 12 15.262 12Q15.375 12 15.5 12.05L19.05 8.5Q19 8.375 19 8.262Q19 8.15 19 8Q19 7.175 19.587 6.588Q20.175 6 21 6Q21.825 6 22.413 6.588Q23 7.175 23 8Q23 8.825 22.413 9.412Q21.825 10 21 10Q20.85 10 20.738 10Q20.625 10 20.5 9.95L16.95 13.5Q17 13.625 17 13.738Q17 13.85 17 14Q17 14.825 16.413 15.412Q15.825 16 15 16Q14.175 16 13.588 15.412Q13 14.825 13 14Q13 13.85 13 13.738Q13 13.625 13.05 13.5L10.5 10.95Q10.375 11 10.262 11Q10.15 11 10 11Q9.95 11 9.5 10.95L4.95 15.5Q5 15.625 5 15.738Q5 15.85 5 16Q5 16.825 4.412 17.413Q3.825 18 3 18Z"/>
    </Icon>
  );
});

IconMaterialTimelineSharp.displayName = 'AmauiIconMaterialTimelineSharp';

export default IconMaterialTimelineSharp;
