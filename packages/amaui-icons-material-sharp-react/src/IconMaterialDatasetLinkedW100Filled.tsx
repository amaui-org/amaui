import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDatasetLinkedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatasetLinkedW100Filled'

      short_name='DatasetLinked'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 18.7V3.3h15.4v8h-6.05q-1.025 0-1.912.35-.888.35-1.613 1H7.65v2.7h.775q-.125.4-.175.813-.05.412-.05.837 0 .45.088.862.087.413.212.838Zm3.35-9.35h2.7v-2.7h-2.7ZM14 19.7q-1.125 0-1.912-.787Q11.3 18.125 11.3 17t.788-1.913Q12.875 14.3 14 14.3h1.75v.7H14q-.825 0-1.412.588Q12 16.175 12 17t.588 1.413Q13.175 19 14 19h1.75v.7Zm-.35-10.35h2.7v-2.7h-2.7Zm.35 8v-.7h6v.7Zm4.25 2.35V19H20q.825 0 1.413-.587Q22 17.825 22 17q0-.825-.587-1.412Q20.825 15 20 15h-1.75v-.7H20q1.125 0 1.913.787.787.788.787 1.913t-.787 1.913q-.788.787-1.913.787Z"/>
    </Icon>
  );
});

IconMaterialDatasetLinkedW100Filled.displayName = 'AmauiIconMaterialDatasetLinkedW100Filled';

export default IconMaterialDatasetLinkedW100Filled;
