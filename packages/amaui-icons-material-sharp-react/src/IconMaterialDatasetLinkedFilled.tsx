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
      <path d="M3 20V2h18v9.075q-.25-.05-.487-.063Q20.275 11 20 11h-6q-.925 0-1.762.262-.838.263-1.563.738H7v4h1.075q-.05.25-.063.488Q8 16.725 8 17q0 .8.2 1.562.2.763.6 1.438Zm4-10h4V6H7Zm7 11q-1.65 0-2.825-1.175Q10 18.65 10 17q0-1.65 1.175-2.825Q12.35 13 14 13h2v2h-2q-.825 0-1.412.588Q12 16.175 12 17t.588 1.413Q13.175 19 14 19h2v2Zm-1-11h4V6h-4Zm1 8v-2h6v2Zm4 3v-2h2q.825 0 1.413-.587Q22 17.825 22 17q0-.825-.587-1.412Q20.825 15 20 15h-2v-2h2q1.65 0 2.825 1.162Q24 15.325 24 17q0 1.65-1.175 2.825Q21.65 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialDatasetLinkedFilled.displayName = 'AmauiIconMaterialDatasetLinkedFilled';

export default IconMaterialDatasetLinkedFilled;
