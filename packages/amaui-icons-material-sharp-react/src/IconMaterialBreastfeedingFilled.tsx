import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBreastfeedingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BreastfeedingFilled'

      short_name='Breastfeeding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.925 22q-1.05 0-2.038-.225Q8.9 21.55 8.1 21.2q-1.15-.5-1.875-1.213Q5.5 19.275 5.5 18.4v-5.775q0-.775.588-1.425.587-.65 1.512-1.15.95-.5 2.088-.775Q10.825 9 12 9q1.175 0 2.312.275 1.138.275 2.088.775.95.5 1.525 1.15.575.65.575 1.425V18.4q0 .425-.188.825-.187.4-.537.75-.35.35-.813.662-.462.313-1.037.563.025-.125.075-.7 0-1.45-1.025-2.475Q13.95 17 12.5 17q-1.075 0-1.9.575T9.35 19.05q.8.2 1.462.275.663.075 1.163.075.425 0 .688-.025.262-.025.337-.025v2.6q-.275.025-.537.038-.263.012-.538.012ZM15 16.5q.825 0 1.413-.588Q17 15.325 17 14.5t-.587-1.413Q15.825 12.5 15 12.5q-.825 0-1.412.587Q13 13.675 13 14.5q0 .825.588 1.412.587.588 1.412.588ZM12 8q1.25 0 2.125-.863Q15 6.275 15 5q0-1.25-.875-2.125T12 2q-1.275 0-2.137.875Q9 3.75 9 5q0 1.275.863 2.137Q10.725 8 12 8Z"/>
    </Icon>
  );
});

IconMaterialBreastfeedingFilled.displayName = 'AmauiIconMaterialBreastfeedingFilled';

export default IconMaterialBreastfeedingFilled;
