import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDatasetLinked = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatasetLinked'

      short_name='DatasetLinked'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20V2h18v9.075q-.25-.05-.487-.063Q20.275 11 20 11h-1V4H5v14h3.075q.1.55.275 1.05.175.5.45.95Zm2-3v1V4v13Zm2-1h1.075q.2-1.225.888-2.262Q9.65 12.7 10.7 12H7Zm0-6h4V6H7Zm7 11q-1.65 0-2.825-1.175Q10 18.65 10 17q0-1.65 1.175-2.825Q12.35 13 14 13h2v2h-2q-.825 0-1.412.588Q12 16.175 12 17t.588 1.413Q13.175 19 14 19h2v2Zm-1-11h4V6h-4Zm1 8v-2h6v2Zm4 3v-2h2q.825 0 1.413-.587Q22 17.825 22 17q0-.825-.587-1.412Q20.825 15 20 15h-2v-2h2q1.65 0 2.825 1.162Q24 15.325 24 17q0 1.65-1.175 2.825Q21.65 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialDatasetLinked.displayName = 'AmauiIconMaterialDatasetLinked';

export default IconMaterialDatasetLinked;
