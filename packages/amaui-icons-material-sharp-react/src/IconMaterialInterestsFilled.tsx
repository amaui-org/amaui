import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInterestsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InterestsFilled'

      short_name='Interests'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m2 11 5-9 5 9Zm5 10q-1.65 0-2.825-1.175Q3 18.65 3 17q0-1.675 1.175-2.838Q5.35 13 7 13q1.65 0 2.825 1.175Q11 15.35 11 17q0 1.65-1.175 2.825Q8.65 21 7 21Zm6 0v-8h8v8Zm4-10q-1.425-1.2-2.387-2.025-.963-.825-1.538-1.45Q12.5 6.9 12.25 6.35T12 5.175q0-1.125.788-1.9.787-.775 1.962-.775.675 0 1.263.312.587.313.987.863.4-.55.988-.863.587-.312 1.262-.312 1.175 0 1.962.775.788.775.788 1.9 0 .625-.25 1.175t-.825 1.175q-.575.625-1.537 1.45Q18.425 9.8 17 11Z"/>
    </Icon>
  );
});

IconMaterialInterestsFilled.displayName = 'AmauiIconMaterialInterestsFilled';

export default IconMaterialInterestsFilled;
