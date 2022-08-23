import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRadioButtonCheckedRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioButtonCheckedRoundedW100Filled'
      short_name='RadioButtonChecked'

      {...props}
    >
      <path d="M12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7ZM12 15.7Q13.55 15.7 14.625 14.625Q15.7 13.55 15.7 12Q15.7 10.45 14.625 9.375Q13.55 8.3 12 8.3Q10.45 8.3 9.375 9.375Q8.3 10.45 8.3 12Q8.3 13.55 9.375 14.625Q10.45 15.7 12 15.7Z"/>
    </Icon>
  );
});

IconMaterialRadioButtonCheckedRoundedW100Filled.displayName = 'AmauiIconMaterialRadioButtonCheckedRoundedW100Filled';

export default IconMaterialRadioButtonCheckedRoundedW100Filled;
