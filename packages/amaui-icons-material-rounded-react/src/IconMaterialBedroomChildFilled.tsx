import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedroomChildFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomChildFilled'

      short_name='BedroomChild'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 15.5h9v.75q0 .325.212.538.213.212.538.212.325 0 .538-.212.212-.213.212-.538v-3.4q0-.75-.413-1.338-.412-.587-1.087-.862V9q0-.825-.587-1.413Q15.325 7 14.5 7h-5q-.825 0-1.412.587Q7.5 8.175 7.5 9v1.65q-.675.275-1.088.862Q6 12.1 6 12.85v3.4q0 .325.213.538.212.212.537.212.325 0 .537-.212.213-.213.213-.538Zm1.5-5v-2h6v2ZM7.5 14v-1.15q0-.35.25-.6t.6-.25h7.3q.35 0 .6.25t.25.6V14ZM4 22q-.825 0-1.412-.587Q2 20.825 2 20V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v16q0 .825-.587 1.413Q20.825 22 20 22Z"/>
    </Icon>
  );
});

IconMaterialBedroomChildFilled.displayName = 'AmauiIconMaterialBedroomChildFilled';

export default IconMaterialBedroomChildFilled;
