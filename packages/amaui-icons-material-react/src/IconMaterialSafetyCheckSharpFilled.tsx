import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSafetyCheckSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyCheckSharpFilled'
      short_name='SafetyCheck'

      {...props}
    >
      <path d="M12 22Q8.525 21.125 6.263 18.012Q4 14.9 4 11.1V5L12 2L20 5V11.1Q20 14.9 17.738 18.012Q15.475 21.125 12 22ZM12 17Q14.075 17 15.538 15.537Q17 14.075 17 12Q17 9.925 15.538 8.462Q14.075 7 12 7Q9.925 7 8.463 8.462Q7 9.925 7 12Q7 14.075 8.463 15.537Q9.925 17 12 17ZM13.65 14.35 11.5 12.2V9H12.5V11.8L14.35 13.65Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckSharpFilled.displayName = 'AmauiIconMaterialSafetyCheckSharpFilled';

export default IconMaterialSafetyCheckSharpFilled;
