import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOnDeviceTraining = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OnDeviceTraining'

      short_name='OnDeviceTraining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 17v-1h2v1Zm0-1.5v-.775q-.475-.275-.738-.738Q10 13.525 10 13q0-.825.588-1.413Q11.175 11 12 11t1.413.587Q14 12.175 14 13q0 .525-.262.987-.263.463-.738.738v.775Zm5 .45-1.05-1.075q.275-.425.413-.9.137-.475.137-.975t-.137-.975q-.138-.475-.413-.9L16 10.05q.5.65.75 1.4.25.75.25 1.55t-.25 1.55q-.25.75-.75 1.4Zm-8 0q-.5-.65-.75-1.4Q7 13.8 7 13q0-2.075 1.463-3.538Q9.925 8 12 8V6.75l2.25 2-2.25 2V9.5q-1.45 0-2.475 1.025Q8.5 11.55 8.5 13q0 .5.137.975.138.475.413.9ZM6 23q-.825 0-1.412-.587Q4 21.825 4 21V3q0-.825.588-1.413Q5.175 1 6 1h12q.825 0 1.413.587Q20 2.175 20 3v18q0 .825-.587 1.413Q18.825 23 18 23Zm0-5h12V6H6Zm0 2v1h12v-1ZM6 4h12V3H6Zm0-1v1-1Zm0 18v-1 1Z"/>
    </Icon>
  );
});

IconMaterialOnDeviceTraining.displayName = 'AmauiIconMaterialOnDeviceTraining';

export default IconMaterialOnDeviceTraining;
