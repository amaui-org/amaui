import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFamilyRestroomSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyRestroomSharpFilled'
      short_name='FamilyRestroom'

      {...props}
    >
      <path d="M18 6Q17.175 6 16.587 5.412Q16 4.825 16 4Q16 3.175 16.587 2.587Q17.175 2 18 2Q18.825 2 19.413 2.587Q20 3.175 20 4Q20 4.825 19.413 5.412Q18.825 6 18 6ZM17 22V10.95H15.175L16.525 7H19.475L22.5 16H20V22ZM12.5 11.5Q11.875 11.5 11.438 11.062Q11 10.625 11 10Q11 9.375 11.438 8.938Q11.875 8.5 12.5 8.5Q13.125 8.5 13.562 8.938Q14 9.375 14 10Q14 10.625 13.562 11.062Q13.125 11.5 12.5 11.5ZM5.5 6Q4.675 6 4.088 5.412Q3.5 4.825 3.5 4Q3.5 3.175 4.088 2.587Q4.675 2 5.5 2Q6.325 2 6.912 2.587Q7.5 3.175 7.5 4Q7.5 4.825 6.912 5.412Q6.325 6 5.5 6ZM3.5 22V15H2V7H9V15H7.5V22ZM11 22V18H10V12.5H15V18H14V22Z"/>
    </Icon>
  );
});

IconMaterialFamilyRestroomSharpFilled.displayName = 'AmauiIconMaterialFamilyRestroomSharpFilled';

export default IconMaterialFamilyRestroomSharpFilled;
