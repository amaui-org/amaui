import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDatasetLinkedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatasetLinkedFilled'

      short_name='DatasetLinked'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20q-.825 0-1.413-.587Q3 18.825 3 18V4q0-.825.587-1.413Q4.175 2 5 2h14q.825 0 1.413.587Q21 3.175 21 4v7.075q-.25-.05-.487-.063Q20.275 11 20 11h-6q-.925 0-1.762.262-.838.263-1.563.738H7v4h1.075q-.05.25-.063.488Q8 16.725 8 17q0 .8.2 1.562.2.763.6 1.438Zm2-10h4V6H7Zm6 0h4V6h-4Zm1 11q-1.65 0-2.825-1.175Q10 18.65 10 17q0-1.65 1.175-2.825Q12.35 13 14 13h1q.425 0 .713.287.287.288.287.713t-.287.712Q15.425 15 15 15h-1q-.825 0-1.412.588Q12 16.175 12 17t.588 1.413Q13.175 19 14 19h1q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 21 15 21Zm1-3q-.425 0-.712-.288Q14 17.425 14 17t.288-.712Q14.575 16 15 16h4q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 18 19 18Zm4 3q-.425 0-.712-.288Q18 20.425 18 20t.288-.712Q18.575 19 19 19h1q.825 0 1.413-.587Q22 17.825 22 17q0-.825-.587-1.412Q20.825 15 20 15h-1q-.425 0-.712-.288Q18 14.425 18 14t.288-.713Q18.575 13 19 13h1q1.65 0 2.825 1.162Q24 15.325 24 17q0 1.65-1.175 2.825Q21.65 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialDatasetLinkedFilled.displayName = 'AmauiIconMaterialDatasetLinkedFilled';

export default IconMaterialDatasetLinkedFilled;
