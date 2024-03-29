import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsInputAntenna = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputAntenna'

      short_name='SettingsInputAntenna'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 19.4-2.3 2.3q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l2.7-2.7v-3.3q-.675-.3-1.087-.925Q9.5 12.75 9.5 12q0-1.05.725-1.775Q10.95 9.5 12 9.5q1.05 0 1.775.725.725.725.725 1.775 0 .75-.412 1.375Q13.675 14 13 14.3v3.3l2.7 2.7q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM12 7q-1.85 0-3.238 1.188Q7.375 9.375 7.075 11.2q-.05.375-.362.587Q6.4 12 6 12q-.425 0-.7-.312-.275-.313-.225-.738.35-2.6 2.325-4.275Q9.375 5 12 5q2.625 0 4.6 1.675 1.975 1.675 2.325 4.275.05.425-.225.738-.275.312-.7.312-.4 0-.712-.213-.313-.212-.363-.587-.3-1.825-1.687-3.012Q13.85 7 12 7Zm0-4Q8.5 3 5.95 5.35t-2.9 5.85q-.05.375-.35.587Q2.4 12 2 12q-.425 0-.712-.312-.288-.313-.238-.738.175-2.125 1.1-3.938.925-1.812 2.4-3.15 1.475-1.337 3.4-2.1Q9.875 1 12 1q2.15 0 4.062.762 1.913.763 3.388 2.1 1.475 1.338 2.4 3.15.925 1.813 1.1 3.938.05.425-.238.738Q22.425 12 22 12q-.4 0-.7-.213-.3-.212-.35-.587-.35-3.5-2.9-5.85Q15.5 3 12 3Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputAntenna.displayName = 'AmauiIconMaterialSettingsInputAntenna';

export default IconMaterialSettingsInputAntenna;
