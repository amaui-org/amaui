import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChipExtractionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChipExtractionFilled'

      short_name='ChipExtraction'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 12q0 2.65 1.725 4.625t4.35 2.325q.4.05.663.35.262.3.262.7 0 .425-.363.7-.362.275-.812.225-3.375-.425-5.6-2.963Q3 15.425 3 12q0-3.4 2.213-5.938Q7.425 3.525 10.8 3.075q.475-.05.837.212Q12 3.55 12 4q0 .4-.262.7-.263.3-.663.35-2.625.35-4.35 2.325Q5 9.35 5 12Zm12.175 1H10q-.425 0-.712-.288Q9 12.425 9 12t.288-.713Q9.575 11 10 11h7.175L15.3 9.125q-.3-.3-.3-.713 0-.412.3-.712t.7-.3q.4 0 .7.3l3.6 3.6q.3.3.3.7 0 .4-.3.7l-3.6 3.6q-.3.3-.7.287-.4-.012-.7-.312-.3-.3-.3-.7 0-.4.3-.7Z"/>
    </Icon>
  );
});

IconMaterialChipExtractionFilled.displayName = 'AmauiIconMaterialChipExtractionFilled';

export default IconMaterialChipExtractionFilled;
