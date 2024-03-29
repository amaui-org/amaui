import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConversionPath = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConversionPath'

      short_name='ConversionPath'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 21q-.975 0-1.75-.562-.775-.563-1.075-1.438H11q-1.65 0-2.825-1.175Q7 16.65 7 15q0-1.65 1.175-2.825Q9.35 11 11 11h2q.825 0 1.413-.588Q15 9.825 15 9t-.587-1.413Q13.825 7 13 7H7.825q-.325.875-1.087 1.438Q5.975 9 5 9q-1.25 0-2.125-.875T2 6q0-1.25.875-2.125T5 3q.975 0 1.738.562Q7.5 4.125 7.825 5H13q1.65 0 2.825 1.175Q17 7.35 17 9q0 1.65-1.175 2.825Q14.65 13 13 13h-2q-.825 0-1.412.587Q9 14.175 9 15q0 .825.588 1.413Q10.175 17 11 17h5.175q.325-.875 1.088-1.438Q18.025 15 19 15q1.25 0 2.125.875T22 18q0 1.25-.875 2.125T19 21ZM5 7q.425 0 .713-.287Q6 6.425 6 6t-.287-.713Q5.425 5 5 5t-.713.287Q4 5.575 4 6t.287.713Q4.575 7 5 7Z"/>
    </Icon>
  );
});

IconMaterialConversionPath.displayName = 'AmauiIconMaterialConversionPath';

export default IconMaterialConversionPath;
