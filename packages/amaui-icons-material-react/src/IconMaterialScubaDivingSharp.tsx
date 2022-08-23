import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScubaDivingSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScubaDivingSharp'
      short_name='ScubaDiving'

      {...props}
    >
      <path d="M3 15Q2.175 15 1.588 14.412Q1 13.825 1 13Q1 12.175 1.588 11.587Q2.175 11 3 11Q3.825 11 4.412 11.587Q5 12.175 5 13Q5 13.825 4.412 14.412Q3.825 15 3 15ZM8.9 10.1Q8.3 10.275 7.763 9.962Q7.225 9.65 7.05 9.05Q6.875 8.45 7.188 7.9Q7.5 7.35 8.1 7.2L12.65 6L13.425 8.9ZM4 23 2.4 21.8 5.25 18 6.025 13.55Q6.1 12.95 6.5 12.487Q6.9 12.025 7.525 11.875L17 9L19 5L22 2L23 3L20.5 5.9L19 10.5L14 14L8.15 15.85L7 19Z"/>
    </Icon>
  );
});

IconMaterialScubaDivingSharp.displayName = 'AmauiIconMaterialScubaDivingSharp';

export default IconMaterialScubaDivingSharp;
